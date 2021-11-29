import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  templateUrl: './testngfor.component.html',
  styleUrls: ['./testngfor.component.css'],
})
export class TestngforComponent implements OnInit {
  person = [
    {
      name: 'john',
      age: 34,
      country: 'UK',
    },
    {
      name: 'jill',
      age: 32,
      country: 'USA',
    },
    {
      name: 'peter',
      age: 33,
      country: 'Japan',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
