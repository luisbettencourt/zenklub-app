import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import * as moment from "moment";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { ProfessionalService } from "./../services/professional.service";

@Component({
  selector: "app-time-table",
  templateUrl: "./time-table.component.html",
  styleUrls: ["./time-table.component.scss"]
})
export class TimeTableComponent implements OnChanges {
  @Input() professional: any;

  form: FormGroup;

  dayCarouselOptions: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth: true,
    loop: false,
    navSpeed: 700,
    dots: false,
    navText: ["&#8249;", "&#8250;"],
    nav: true
  };

  timeslotCarouselOptions = Object.assign({}, this.dayCarouselOptions, {
    nav: false
  });

  dates$ = new ReplaySubject<any>(0);
  dates = [];
  now = new Date();

  constructor(
    private fb: FormBuilder,
    private professionalService: ProfessionalService
  ) {
    this.form = this.fb.group({
      date: "",
      timeslot: "",
      name: ""
    });

    this.form.get("date").valueChanges.subscribe(date => {
      if (
        this.form.get("timeslot").value &&
        date &&
        date.day() !== this.form.get("timeslot").value.day()
      ) {
        this.form.get("timeslot").setValue("");
      }
    });

    this.form.get("timeslot").valueChanges.subscribe(timeslot => {
      if (
        timeslot &&
        (!this.form.get("date").value ||
          timeslot.day() !== this.form.get("date").value.day())
      ) {
        let i = timeslot.diff(
          moment(this.now)
            .hour(8)
            .minutes(0),
          "days"
        );
        this.form.get("date").setValue(this.dates[i].date);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.professional.currentValue) {
      this.dates = [];
      for (let i = 0; i <= 30; i++) {
        let date = moment(this.now)
          .hour(8)
          .minutes(0)
          .seconds(0)
          .milliseconds(0)
          .add(i, "days");

        let timeslots = [];
        for (let j = 0; j <= 18; j++) {
          let timeslot = moment(this.now)
            .add(i, "days")
            .hour(8)
            .minutes(0)
            .seconds(0)
            .milliseconds(0)
            .add(j * 30, "minutes");

          let scheduled = "";
          if (this.professional && this.professional.timeslots) {
            this.professional.timeslots.forEach(scheduledTimeslot => {
              if (timeslot.diff(moment(scheduledTimeslot.time)) === 0) {
                scheduled = scheduledTimeslot.name;
              }
            });
          }

          timeslots.push({
            time: timeslot,
            disabled: scheduled || moment(this.now) > timeslot,
            name: scheduled
          });
        }

        this.dates.push({
          date,
          timeslots
        });
      }

      this.dates$.next(this.dates);
    }
  }

  scheduleTimeslot() {
    this.professionalService
      .scheduleTimeslot({
        name: this.form.get("name").value,
        time: this.form.get("timeslot").value,
        professionalId: this.professional.id
      })
      .subscribe((timeslot: any) => {
        if (timeslot.time) {
          this.dates.forEach(date => {
            if (
              date.date.diff(
                moment(timeslot.time)
                  .hours(8)
                  .minutes(0)
              ) === 0
            ) {
              date.timeslots.forEach(dateTimeslot => {
                if (dateTimeslot.time.diff(moment(timeslot.time)) === 0) {
                  dateTimeslot.name = timeslot.name;
                  dateTimeslot.disabled = true;
                }
              });
            }
          });
          this.form.reset();
          this.dates$.next(this.dates);
        }
      });
  }
}
