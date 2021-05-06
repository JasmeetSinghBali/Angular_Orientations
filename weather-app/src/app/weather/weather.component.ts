import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  // refference to the form to perform any related action

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.weatherSearchForm=this.formBuilder.group({
      location:['']
    });
  }
}
