import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopformComponent } from './shopform/shopform.component';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "form",
    component: ShopformComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "explore/:shoptype",
    component: ExploreComponent
  },
  {
    path: "more/:shopid",
    component: MoreinfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
