import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  // body:Object[
  //   {name:string,
  //     password:string,
  //     email:string,
  //     username:string,
  //     standard:string,
  //     contact:string}
  // ]
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.signup(form.value.name, form.value.password,form.value.username, form.value.contact,form.value.email,form.value.standard).subscribe((res: HttpResponse<any>) => {

      this.router.navigate(['/home']);
    });
  }
}
