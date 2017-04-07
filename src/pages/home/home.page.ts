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

  constructor(private nav: NavController,
              private theMovieDBAPI: TheMovieDBAPI,
              private loadingController: LoadingController) {

    this.init();
  }


  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting discover...'
    });

    let object = {
      language: 'es-ES',
      sort_by: 'popularity.desc',
      include_video: false,
      primReleaseDateGTE: '2017-01-01',
      primReleaseDateLTE: '2018-12-30',
      page: '1'
    };

    loader.present().then(() => {
      this.theMovieDBAPI.getDiscover(object).subscribe(data => {
        this.discovers = data;
        loader.dismiss();
      });
    });
  }


  init(){
    this.imageURL = 'https://image.tmdb.org/t/p/w185';
  }

}
