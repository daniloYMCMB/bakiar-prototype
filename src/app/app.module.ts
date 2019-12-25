import { AppStoreService } from './stores/app-store.service';
import { UserFormsModule } from './user/user-forms/user-forms.module';
import { UserStoresModule } from './user/user-stores/user-stores.module';
import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ConfirmUserComponent } from './user/confirm-user/confirm-user.component';
import { FormControlsModule } from './user/form-controls/form-controls.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRegisterComponent,
    ConfirmUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserFormsModule,
    FormControlsModule,
    UserStoresModule,
  ],
  providers: [
    AuthGuardService,
    AppStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
