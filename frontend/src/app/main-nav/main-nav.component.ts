import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isLoggedIn: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    let auth=null;
    auth=this.authService.getAccessToken();
    if (auth!==null) {
      this.isLoggedIn = true;
    console.log('is logged in if ' + this.isLoggedIn)
    console.log('auth if' + auth)
    }
    else{
      this.isLoggedIn = false;
    console.log('is logged in else ' + this.isLoggedIn)
    console.log('auth else' + auth);
    }
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.authService.logout();

  }

}
