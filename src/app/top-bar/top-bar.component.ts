import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompanyItem } from '../store/model/ICompanyItem';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  companies: ICompanyItem[] = [{ name: "A Company", logoUrl: "../../assets/images/firstCompany.jpg"}, { name: "A Second Company", logoUrl: "../../assets/images/secondCompany.jpg"}, 
    { name: "A Third Company", logoUrl: "../../assets/images/thirdCompany.jpg"}, { name: "A Fourth Company", logoUrl: "../../assets/images/fourthCompany.jpg"} ]

  navigateToHome(){
    this.router.navigate(["/home"])
  }

}
