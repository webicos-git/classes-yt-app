import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.username, form.value.password).subscribe((res: HttpResponse<any>) => {
      // if (res.status === 200) {
      //   // we have logged in successfully
      //   this.router.navigate(['/home']);
      // }
      console.log(res);

    });
    console.log(form.value.username, form.value.password)
  }

}
