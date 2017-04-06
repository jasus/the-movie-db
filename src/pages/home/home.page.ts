import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TheMovieDBAPI } from '../../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  discover: any;

  constructor(private nav: NavController,
              private theMovieDBAPI: TheMovieDBAPI,
              private loadingController: LoadingController) {

    this.init();
  }


  init(){
    /*let loader = this.loadingController.create({
      content: 'Getting discover...'
    });

    let object = {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_video: false,
      primReleaseDateGTE: '2017-01-01',
      primReleaseDateLTE: '2018-12-30',
      page: '1'
    };

      loader.present().then(() => {
      this.theMovieDBAPI.getDiscover(object).subscribe(data => {
        this.discover = data;
        loader.dismiss();
      });
    });*/
  }

}
