import { Component } from '@angular/core';

@Component({
  selector: 'text-update',
  templateUrl: './textupdate.component.html',
})
export class TextupdateComponent {
  fname: string = '';

  public updateText(): void {
    this.fname = (<HTMLInputElement>document.getElementById('fname')).value;
  }
}
