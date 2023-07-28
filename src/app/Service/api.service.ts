import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

  getNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2023-07-26&to=2023-07-26&sortBy=popularity&apiKey=3ac3d8f26368477cb088bc9177e1756c');
  }

  getUSNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3ac3d8f26368477cb088bc9177e1756c')
  }

  getGermanNews() {
    return this.http.get(' https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3ac3d8f26368477cb088bc9177e1756c')
  }

}
