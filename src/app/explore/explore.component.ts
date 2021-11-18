import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    return this.http.get(environment.url+"getshops/?type=" + data).subscribe((result) => {
      console.log("ShopList Fetched Successfully....")
      console.log(environment.url+"getshops/?type=")
      this.shopList = result;
      this.shopList = this.shopList.data;
      console.log(this.shopList)
      var size = Object.keys(this.shopList).length;
      for (var i = 0; i < size; i++) {
        this.shopList[i].shop_image = environment.url+"media/" + this.shopList[i].shop_image
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
