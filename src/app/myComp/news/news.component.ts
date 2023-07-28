import { Component } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  public news: any = [];

  public dt: any;

  constructor(private api: ApiService) {
    this.getNewsFromApi();
  }

  getNewsFromApi() {
    this.api.getNews().subscribe((res: any) => {
      console.log(res);
      this.news = res.articles;
    });
  }

  getSearchResult(searchString: any) {
    console.log(searchString);
    const filteredData = this.news.filter((item: any) => item.title.includes(searchString));
    this.news = filteredData;
    console.log(this.news);
  }

  getDateWisedata(data: any) {
    console.log(data);
    const filterDate = this.news.filter((item: any) => item.publishedAt.includes(data));
    this.news = filterDate;
    console.log(this.news);
  }

}
