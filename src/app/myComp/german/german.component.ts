import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent {

  public GermanyNews:any=[];

  constructor(private api: ApiService) {
    this.getGermanyNewFromApi();
  }

  getGermanyNewFromApi() {
    this.api.getGermanNews().subscribe((res: any) => {
      this.GermanyNews = res.articles;
      console.log(this.GermanyNews);

    })
  }
}
