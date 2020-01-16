import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  title = 'testerrr';
  Categories : string[] = ["informatique","telephonie","electromenager","gaming","bureautique","impresssion"];
  session=true;
  constructor() { }

  ngOnInit() {
  }

}
