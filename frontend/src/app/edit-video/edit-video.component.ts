import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {
  selectedValue: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const videoId =paramMap.get('id');
      console.log(videoId);
    })
  }

  subjects: Subject[] = [
    {value: 'history', viewValue: 'History'},
    {value: 'geography', viewValue: 'Geography'},
    {value: 'english', viewValue: 'English'},
    {value: 'math', viewValue: 'Math'},
    {value: 'science', viewValue: 'Science'},
  ];

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
