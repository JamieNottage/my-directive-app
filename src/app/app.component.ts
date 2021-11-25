import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'my-directive-app';
  body: string =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
  employee: any = {
    empId: 100,
    name: 'john',
    age: 25,
    photo: 'assets/images/user1.png',
  };
  caption: string = 'User 1';

  public changePhoto(): void {
    this.employee.photo = 'assets/images/user2.png';
  }

  public togglePhoto(): void {
    let imgName = this.employee.photo.split('/').pop();
    if (imgName === 'user1.png') {
      this.employee.photo = 'assets/images/user2.png';
      this.caption = 'User 2';
    } else if (imgName === 'user2.png') {
      this.employee.photo = 'assets/images/user1.png';
      this.caption = 'User 1';
    }
  }
}
