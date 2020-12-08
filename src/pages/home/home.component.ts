import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public ngOnInit() {
    console.log(1, 2, 3, 4, 5, 6, 7, 8);
    const a = { a: 1, b: 2, foo: 3 };
  }
}
