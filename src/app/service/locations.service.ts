import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spot } from '../interface/spot';

const url='https://5ddbb358041ac10014de140b.mockapi.io/spot';
const mock_url = 'https://630fa7b0498924524a9347b3.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }
  getLocations(): Observable<Spot[]> {
    return this.http.get<Spot[]>(mock_url+'/spot');
  }

  getLocation(id_get : string): Observable<Spot> {
    return this.http.get<Spot>(mock_url+'spot/:'+id_get);
  }
}
