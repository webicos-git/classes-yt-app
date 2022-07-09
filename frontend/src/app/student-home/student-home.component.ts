import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import {WebRequestService} from '../shared/web-request.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  videos: any = []
  unsafeUrl: any

  constructor(
    private authService: AuthService,
    private router: Router,
    private webRequestService: WebRequestService,
    private sanitizer: DomSanitizer
  ) {
    this.getVideos()
  }

  ngOnInit(): void {
    var auth=null;
    this.unsafeUrl = this.getSafeUrl('https://www.youtube.com/embed/tI_sdbnSw7c')
    auth=this.authService.getAccessToken();
    if (auth!==null) {

    }
    else{
      this.router.navigate(['/login']);
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getVideos() {
    return this.webRequestService.getVideos().subscribe((res: any) => {
      this.videos = res;
      for (let i=0; i<= res.length; i++) {
        this.videos[i].videolink = this.getSafeUrl(this.videos[i].videolink)
      }
    });
  }

}
