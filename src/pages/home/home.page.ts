import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TheMovieDBAPI } from '../../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  discovers: any;
  imageURL: any;
  movies: any;
  queryObject: any;


  constructor(private nav: NavController,
              private theMovieDBAPI: TheMovieDBAPI,
              private loadingController: LoadingController) {

    this.init();
  }


  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting discover...'
    });


    loader.present().then(() => {
      this.theMovieDBAPI.getDiscover(this.queryObject).subscribe(data => {
        this.discovers = data;
        this.movies = this.discovers.results;
        loader.dismiss();
      });
    });
  }


  init(){
    this.imageURL = 'https://image.tmdb.org/t/p/w185';

    this.queryObject = {
      language: 'es-ES',
      sort_by: 'popularity.desc',
      include_video: false,
      primReleaseDateGTE: '2017-01-01',
      primReleaseDateLTE: '2018-12-30',
      page: 1
    };

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.queryObject.page = this.queryObject.page + 1;

    this.theMovieDBAPI.getDiscover(this.queryObject).subscribe(data => {
      this.discovers = data;
      this.movies.push.apply(this.movies, this.discovers.results);

      infiniteScroll.complete();

      this.checkMoreData(infiniteScroll);
      console.log('Async operation has ended');
    });
  }

  checkMoreData(infiniteScroll){
    if(this.queryObject.page >= this.discovers.total_pages){
      infiniteScroll.enable(false);
    }
  }

}
