import { Component, OnInit } from '@angular/core';
import { UserRegisterFormService } from '../user-forms/user-register-form.service';
import { UserFormStoreService } from '../user-stores/user-form-store.service';

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
  public validate = false;
  public isSame = false;

  constructor(
    public userRegisterForm: UserRegisterFormService,
    public userRegisterStore: UserFormStoreService
  ) { }

  ngOnInit() {
    this.userRegisterStore.form$
      .subscribe(value => {
        this.validate = value.areYouSure;
      });

  }

  changeDay(day: string) {
  }

  register(){
    console.log('register');

  }

}
