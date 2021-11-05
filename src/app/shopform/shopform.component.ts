import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopform',
  templateUrl: './shopform.component.html',
  styleUrls: ['./shopform.component.css']
})
export class ShopformComponent implements OnInit {

  shopform = true;
  ownerform = false;
  shopdata = {};
  ownerdata = {};
  totaldata = {};
  step1;
  step2;
  step3;
  constructor() { }

  addShop(data) {
    this.shopdata = data.value;
    console.log(this.shopdata)
    this.shopform = false;
    this.ownerform = true;
    this.step1 = "active"
  }

  addOwner(data) {
    this.ownerdata = data.value;
    console.log(this.ownerdata)

    this.totaldata = {
      ...this.shopdata,
      ...this.ownerdata
    };
    console.log(this.totaldata)
    this.shopform = true;
    this.ownerform = false;
    this.step2 = "active"
  }

  ngOnInit(): void {
  }

}
