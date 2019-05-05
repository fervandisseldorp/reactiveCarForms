import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Car} from '../model/car';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }


  getList(): Observable<Car[]> {

    return this.http.get<Car[]>('./assets/json/cars.json');

  }

}
