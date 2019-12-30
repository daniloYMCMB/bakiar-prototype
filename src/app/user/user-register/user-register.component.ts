import { Component, OnInit } from '@angular/core';
import { UserRegisterFormService } from '../user-forms/user-register-form.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.styl']
})
export class UserRegisterComponent implements OnInit {

  public documents = [
    {
      name: 'dni',
      value: 'dni'
    },
    {
      name: 'pasaporte',
      value: 'pasaporte'
    },
  ];

  public isSame = false;

  constructor(
    public userRegisterForm: UserRegisterFormService
  ) { }

  ngOnInit() {
  }

  changeDay(day: string) {
  }

  register(){
    console.log('register');

  }

}
