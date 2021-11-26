import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee = {
    empId: 100,
    empName: 'john',
    salary: 766785,
    bonus: 34589,
    joiningDate: new Date(2021, 10, 1),
    description:
      'I have joined as a Senior Engineer in the organisation and I will undergo some full stack software training',
  };

  products = [
    {
      prodName: 'a',
      desc: 'This product is the best industry tool for creating reports',
    },
    {
      prodName: 'b',
      desc: 'This product is the best industry tool for creating reports',
    },
    {
      prodName: 'c',
      desc: 'This product is the best industry tool for creating reports',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
