import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiowService} from '../apiow.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  // refference to the form to perform any related action
  public weatherCondition: any;
  public weatherData: any;
  public weatherTimezone: any;




  constructor(
    private formBuilder:FormBuilder,
    private apiowService:ApiowService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm=this.formBuilder.group({
      lat:['28.6139'],
      lon:['77.2090']
    });


  }
  sendToOneCall(formValues){
    //console.log(formValues);
    //data['current']['weather'][0].main

    const {lat,lon}=formValues;

    // Basic input check

    if (!lat || !lon){
       alert('Please Provide me the Latitudes and Longitudes');
       return;
    };

    this.apiowService
    .getWeather(lat,lon)
    .subscribe(data=>{
      this.weatherCondition=data['current']['weather'][0];
      this.weatherData=data['current'];
      this.weatherTimezone=data;
      //console.log('Inside' ,data)
    });

    console.log(this.weatherCondition);
    console.log(this.weatherData);
    console.log(this.weatherTimezone);
  }
}
