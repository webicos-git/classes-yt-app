import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {RegisterStudentComponent} from './register-student/register-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import {AddVideoComponent} from './add-video/add-video.component';
import {ManageVideosComponent} from './manage-videos/manage-videos.component';
import {EditVideoComponent} from './edit-video/edit-video.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'student-home', component: StudentHomeComponent},
  {path: 'add-video', component: AddVideoComponent},
  {path: 'edit-video', component: EditVideoComponent},
  {path: 'manage-videos', component: ManageVideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
