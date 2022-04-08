import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  LogoF1: string;
  LogoF2: string;

  constructor() {
    this.LogoF1 = '../../assets/img/European_Commission_logo.png',
    this.LogoF2 = '../../assets/img/RNP_logo.png'
   }

  ngOnInit(): void {
  }

}
