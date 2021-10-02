import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'User Managment';
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddUser(){
    console.log('Add user form open/close custom event fired')
  }

}
