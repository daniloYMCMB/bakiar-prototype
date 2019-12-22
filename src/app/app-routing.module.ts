import { AuthGuardService
} from './guards/auth-guard.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserRegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register-user',
    component: UserRegisterComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
