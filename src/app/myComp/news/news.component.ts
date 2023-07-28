import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
public news:any=[];

public city:any=["India","Us","America"]

constructor(private api:ApiService)
{
   this.getNewsFromApi()
}

getNewsFromApi()
{
  this.api.getNews().subscribe((res:any) => {
    console.log(res);
    this.news = res.articles;
   });
}


}
