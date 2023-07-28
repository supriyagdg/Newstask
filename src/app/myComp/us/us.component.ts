import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent {

public usNews:any=[];

  constructor(private api: ApiService) {
    this.getUsNewsFromApi()
  }

  getUsNewsFromApi() {
    this.api.getUSNews().subscribe((res: any) => {
      this.usNews = res.articles;
      console.log(this.usNews);
    })
  }
}
