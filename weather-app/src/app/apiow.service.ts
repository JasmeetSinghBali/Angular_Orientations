import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '.././environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiowService {

  constructor(private http:HttpClient) { }

  getWeather(city,lat,lon){
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${environment.apikey}`
    );
  }
}
