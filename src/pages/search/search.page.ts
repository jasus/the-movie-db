import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TheMovieDBAPI } from '../../services/services';


@Component({
  selector: 'page-search',
  templateUrl: 'search.page.html'
})
export class SearchPage {

  searchResult: any;
  imageURL: any;
  movies: any;
  queryObject: any;
  queryText: any;


  constructor(private nav: NavController,
              private theMovieDBAPI: TheMovieDBAPI,
              private loadingController: LoadingController) {

    this.init();
  }

  init(){
    this.imageURL = 'https://image.tmdb.org/t/p/w185';

    this.queryText = '';

    this.queryObject = {
      language: 'es-ES',
      query: '',
      page: 1
    };

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.queryObject.page = this.queryObject.page + 1;

    this.theMovieDBAPI.searchByTitle(this.queryObject).subscribe(data => {
      this.searchResult = data;
      this.movies.push.apply(this.movies, this.searchResult.results);

      infiniteScroll.complete();

      this.checkMoreData(infiniteScroll);
      console.log('Async operation has ended');
    });
  }

  checkMoreData(infiniteScroll){
    if(this.queryObject.page >= this.searchResult.total_pages){
      infiniteScroll.enable(false);
    }
  }

  search(){

    let loader = this.loadingController.create({
      content: 'Searching...'
    });

    this.queryObject.page = 1;
    this.queryObject.query = encodeURI(this.queryText);

    loader.present().then(() => {
      this.theMovieDBAPI.searchByTitle(this.queryObject).subscribe(data => {
        this.searchResult = data;
        this.movies = this.searchResult.results;
        loader.dismiss();
      });
    });
  }

}
