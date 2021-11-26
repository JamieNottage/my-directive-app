import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  selectedButton: string = '';
  email: string = '';

  constructor() {
    console.log('Course Component Loaded...');
  }

  ngOnInit(): void {}

  // event handler functions can be passed with event objects
  public onSave($event: any): void {
    console.log('Button clicked and event object was passed');
    console.log($event.target.innerText);
    let str = $event.target.innerText;
    if (str === 'Save') {
      this.selectedButton = str;
    }
  }

  public onKeyUp($event: any): void {
    console.log($event.target.value);
    this.email = $event.target.value;
  }

  // programatically accessing the HTML element via reference variable
  public onKeyUpwithTempVar(email: HTMLInputElement) {
    console.log(email.value);
    let emailAddress = email.value;
    let emailTextSize = email.size;
    console.log(emailAddress + ' ' + emailTextSize);
    email.value = 'hello';
  }
}
