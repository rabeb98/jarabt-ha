import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'testerrr';
  Categories : string[] = ["categ1","categ2","categ3","categ4"];
  session=true;
  constructor() { }

  ngOnInit() {
  }

}
