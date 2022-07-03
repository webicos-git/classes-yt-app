import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  subjects: Subject[] = [
    {value: 'history', viewValue: 'History'},
    {value: 'geography', viewValue: 'Geography'},
    {value: 'english', viewValue: 'English'},
    {value: 'math', viewValue: 'Math'},
    {value: 'science', viewValue: 'Science'},
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
