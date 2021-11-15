import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {

  private routeSub: any;
  private req: any;
  text: string;
  title = "Shops List";
  shoptype;
  shopList;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  getShops(data) {
    return this.http.get("http://127.0.0.1:8000/getshops/?type=" + data).subscribe((result) => {
      console.log("ShopList Fetched Successfully....")
      this.shopList = result;
      this.shopList = this.shopList.data;
      var size = Object.keys(this.shopList).length;
      for (var i = 0; i < size; i++) {
        this.shopList[i].shop_image = "http://127.0.0.1:8000/media/" + this.shopList[i].shop_image
      }


    })
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(para => {
      this.shoptype = para['shoptype']
      this.getShops(this.shoptype)
    })

  }
  ngOnDestroy() { }
}
