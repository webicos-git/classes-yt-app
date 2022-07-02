import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {  }

  ngOnInit(): void {
    var auth=null;
    auth=this.authService.getAccessToken();
    if (auth!==null) {
      
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
