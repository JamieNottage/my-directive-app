import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testif',
  templateUrl: './testif.component.html',
  styleUrls: ['./testif.component.css'],
})
export class TestifComponent implements OnInit {
  isLogged: boolean = true;
  color: string = 'yellow';

  constructor() {
    console.log('TestIfComponent Loaded...');
  }

  ngOnInit(): void {}
}
