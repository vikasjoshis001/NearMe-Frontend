import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopform',
  templateUrl: './shopform.component.html',
  styleUrls: ['./shopform.component.css']
})
export class ShopformComponent implements OnInit {

  shopform = true;
  ownerform = false;
  val;
  constructor() { }

  addShop(data){
    this.val = data;
    this.shopform = false;
    this.ownerform = true;
  }

  addOwner(data){
    this.val = data;
    this.shopform = true;
    this.ownerform = false;
  }

  ngOnInit(): void {
  }

}
