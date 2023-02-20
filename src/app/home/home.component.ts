import { Component, OnInit } from '@angular/core';

interface Duration {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  durations: Duration[] = [
    { value: 'days', viewValue: 'Days' },
    { value: 'weeks', viewValue: 'Weeks' },
    { value: 'months', viewValue: 'Months' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
