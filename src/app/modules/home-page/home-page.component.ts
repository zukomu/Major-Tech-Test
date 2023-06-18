import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOtherScreen(destination: string){
    // obviously there aren't any other screens to actually navigate to but this is how I'd do it if there were.
    // this.router.navigate([`/${destination}`])
    console.log(destination);
  }

}
