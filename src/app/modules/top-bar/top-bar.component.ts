import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompanyItem } from '../../store/model/ICompanyItem';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  companies: ICompanyItem[] = [{ name: "A Company", logoUrl: "../../assets/images/firstCompany.jpg", shortName: "firstCompany"}, 
  { name: "A Second Company", logoUrl: "../../assets/images/secondCompany.jpg", shortName: "secondCompany"}, 
    { name: "A Third Company", logoUrl: "../../assets/images/thirdCompany.jpg", shortName: "thirdCompany"}, 
    { name: "A Fourth Company", logoUrl: "../../assets/images/fourthCompany.jpg", shortName: "fourthCompany"} ]

  navigateToOtherScreen(destination: string){
    // obviously there aren't any other screens to actually navigate to but this is how I'd do it if there were.
    // this.router.navigate([`/${destination}`])
    console.log(destination);
  }

}
