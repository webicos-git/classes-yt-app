import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

interface Streams {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedStreamValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  streams: Streams[] = [
    {value: 'arts', viewValue: 'Arts'},
    {value: 'commerce', viewValue: 'Commerce'},
    {value: 'science', viewValue: 'Science'}
  ];

  onSubmit(Form: NgForm) {
    console.log(Form.value)
  }

}
