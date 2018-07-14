import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './signup.component';
import { AppComponent } from '../../app/app.component';
import { LoginComponent} from '../login/login.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SignupComponent, LoginComponent]
})
export class SignupRoutingModule { }
