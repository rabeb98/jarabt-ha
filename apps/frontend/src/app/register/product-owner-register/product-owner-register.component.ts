import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'myorg-product-owner-register',
  templateUrl: './product-owner-register.component.html',
  styleUrls: ['./product-owner-register.component.css']
})
export class ProductOwnerRegisterComponent implements OnInit {
  productOwner;
  constructor(private registerService: RegisterService) {
    // this.productOwner = new productOwner();
  }

  onSignup(f) {
    // this.productOwner.OrgName = f.value.OrgName;
    // this.productOwner.representative = f.value.representative;
    // this.productOwner.email = f.value.email;
    // this.productOwner.post = f.value.post;
    // this.productOwner.tax = f.value.tax;
    // this.productOwner.phone = f.value.phone;
    // this.productOwner.Activity_type = f.value.Activity_type;
    this.registerService.registerOrganism(this.productOwner);
  }
  ngOnInit() {
  }

}
