import { Component, OnInit } from '@angular/core';
import {WebRequestService} from '../shared/web-request.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss']
})
export class LiveSessionComponent implements OnInit {
  standard: string;
  stream: string;
  videos: any = [];

  constructor(
    private router: Router,
    private webRequestService: WebRequestService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLiveSession()
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getLiveSession() {
    this.standard = localStorage.getItem('standard');
    this.stream = localStorage.getItem('stream');
    return this.webRequestService.getStdWiseLiveSession(this.standard, this.stream).subscribe((res: any) => {
      this.videos = res;
      console.log(res.length)
      for (let i=0; i<= res.length; i++) {
        console.log(this.videos[i].videolink);
        this.videos[i].videolink = this.videos[i].videolink;
      }
    });
  }
}
