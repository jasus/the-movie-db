import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TheMovieDBAPI {

  private baseURL = 'https://api.themoviedb.org/3';
  private API_KEY = '29cb3c4c70089b03ff1eedbcd001a116';

  currentDiscover: any = {};

  constructor(private http: Http) {}

  private addToURL(data, resource){
    let url = '';
    if(data){
      url += resource+data;
    }
    return url;
  }

  getDiscover(data) : Observable<any>{
    let url = `${this.baseURL}/discover/movie?api_key=${this.API_KEY}`;

    url += this.addToURL(data.language, '&language=');
    url += this.addToURL(data.sort_by, '&sort_by=');
    url += this.addToURL(data.include_video, '&include_video=');
    url += this.addToURL(data.primReleaseDateGTE, '&primary_release_date.gte=');
    url += this.addToURL(data.primReleaseDateLTE, '&primary_release_date.lte=');
    url += this.addToURL(data.page, '&page=');

    return this.http.get(url)
      .map((response: Response) => {
        this.currentDiscover = response.json();
        return this.currentDiscover;
      });
  }

  searchByTitle(data) : Observable<any>{
    let url = `${this.baseURL}/search/movie?api_key=${this.API_KEY}`;

    url += this.addToURL(data.language, '&language=');
    url += this.addToURL(data.query, '&query=');
    url += this.addToURL(data.page, '&page=');

    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  getCurrentDiscover(){
    return this.currentDiscover;
  }
}
