import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

export interface Users{
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit{

  constructor(private userService: UserService){ }

  ngOnInit(){

  }
}

