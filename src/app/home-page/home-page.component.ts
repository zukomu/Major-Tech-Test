import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAboutUs(){
    console.log("actually opening something is outside the brief but a button without a (click) bugs me so I felt compelled to add this.")
  }

}
