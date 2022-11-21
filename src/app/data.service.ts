import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL = "https://api.shrtco.de/v2/shorten?url="

  constructor(private _http: HttpClient) { }

  //Method for getting the shorthened URL(You can create an Interface or Class for the retrieved data from the API)
  getShortUrl(data: any): Observable<any> {
    return this._http.get(`${this.URL}${data}`)
  }
}
