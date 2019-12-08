import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfessionalService {
  apiBaseUrl = "https://zenklub-api.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  getProfessionals(where): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/professionals${
        where ? "?filter=" + encodeURIComponent(JSON.stringify(where)) : ""
      }`
    );
  }

  getProfessionalById(id: string): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/professionals/${id}?filter=${encodeURIComponent(
        JSON.stringify({ include: "timeslots" })
      )}`
    );
  }

  scheduleTimeslot(timeslot): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/timeslots`, timeslot);
  }
}
