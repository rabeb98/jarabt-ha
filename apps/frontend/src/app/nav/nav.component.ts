import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'testerrr';
  Categories : string[] = ["categ1","categ2","categ3","categ4"];
  session=true;
  constructor() { }

  ngOnInit() {
  }

}
