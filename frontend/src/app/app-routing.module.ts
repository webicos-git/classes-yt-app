import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {RegisterStudentComponent} from './register-student/register-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import {AddVideoComponent} from './add-video/add-video.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'student-home', component: StudentHomeComponent},
  {path: 'add-video', component: AddVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
