import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopform',
  templateUrl: './shopform.component.html',
  styleUrls: ['./shopform.component.css']
})
export class ShopformComponent implements OnInit {

  selectedFile: File;
  shopform = true;
  ownerform = false;
  successform = false;
  shopdata = {};
  ownerdata = {};
  totaldata = {};
  filetoupload: File | null;
  step1;
  step2;
  step3;
  out;
  constructor(private http: HttpClient) { }

  handleFileInput(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }

  addShop(data) {
    this.shopdata = data.value;
    console.log(this.shopdata)
    this.shopform = false;
    this.ownerform = true;
    this.successform = false;

    this.step1 = "active"
  }

  addOwner(data) {
    this.ownerdata = data.value;
    console.log(this.ownerdata)

    this.totaldata = {
      ...this.shopdata,
      ...this.ownerdata
    };

    const fd = new FormData();
    fd.append("shop_name", this.totaldata["shop_name"]);
    fd.append("shop_contact", this.totaldata["shop_contact"]);
    fd.append("shop_email", this.totaldata["shop_email"]);
    fd.append("shop_type", this.totaldata["shop_type"]);
    fd.append("shop_address", this.totaldata["shop_address"]);
    fd.append("shop_description", this.totaldata["shop_description"]);
    fd.append("shop_image", this.selectedFile, this.selectedFile.name);
    fd.append("owner_name", this.totaldata["owner_name"]);
    fd.append("owner_contact", this.totaldata["owner_contact"]);
    fd.append("owner_email", this.totaldata["owner_email"]);
    fd.append("owner_address", this.totaldata["owner_address"]);

    console.log(fd)
    this.shopform = false;
    this.ownerform = false;
    this.successform = true;

    this.step2 = "active"
    return this.http.post("http://127.0.0.1:8000/shop/", fd).subscribe((result) => {
      this.out = result;
      console.log("OUTPUT is : ", this.out)
      this.step3 = "active"
    })
  }

  finish() {
    console.log("finish")
    this.step3 = "active"
  }

  ngOnInit(): void {
  }

}
