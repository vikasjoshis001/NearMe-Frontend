import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {

  private routeSub: any;
  private req: any;
  text: string;
  shopId;
  shopList;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  getShop(data) {
    return this.http.get("http://127.0.0.1:8000/shopdetails/?shop_id=" + data).subscribe((result) => {
      console.log("ShopList Fetched Successfully....")
      this.shopList = result;
      this.shopList = this.shopList.data;
      console.log(this.shopList)
      var size = Object.keys(this.shopList).length;
      for (var i = 0; i < size; i++) {
        this.shopList[i].shop_image = "http://127.0.0.1:8000/media/" + this.shopList[i].shop_image
      }
    })
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(para => {
      this.shopId = para['shopid']
      console.log(this.shopId)
      this.getShop(this.shopId)
    })
  }
}
