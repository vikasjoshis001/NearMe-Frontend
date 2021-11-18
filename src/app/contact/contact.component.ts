import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  out;
  contactform = true;
  successform = false;
  constructor(private http: HttpClient) { }

  contactUs(data){
    console.log(data.value);
    return this.http.post(environment.url+"contact/", data.value).subscribe((result) => {
      this.out = result;
      console.log("OUTPUT is : ", this.out)
      this.contactform = false;
      this.successform = true;
    })
    
  }

  ngOnInit(): void {
  }

}
