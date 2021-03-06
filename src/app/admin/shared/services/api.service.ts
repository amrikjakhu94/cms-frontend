import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
URI = 'http://localhost:8000/api/cms/';
  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<any> {
    return this.http.get(`${this.URI}/home`);
  }
  sendHomePageData(data): Observable<any> {
    return this.http.post(`${this.URI}/home`, data);
  }
  getAboutusPageData(): Observable<any> {
    return this.http.get(`${this.URI}/aboutus`);
  }
  sendAboutusPageData(data): Observable<any> {
    return this.http.post(`${this.URI}/aboutus`, data);
  }
  getContactusPageData(): Observable<any> {
    return this.http.get(`${this.URI}/contactus`);
  }
  sendContactusPageData(data): Observable<any> {
    return this.http.post(`${this.URI}/contactus`, data);
  }
}
