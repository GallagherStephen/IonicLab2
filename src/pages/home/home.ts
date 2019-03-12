import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie'; //step 4


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

movies:any = []; //holds all the data for line 22

  constructor(public navCtrl: NavController,private movieProvider:MovieProvider) {

  }

  ionViewDidLoad() {

    this.movieProvider.getFilmInfo().subscribe(data =>
      {
      this.movies = data.Search; //movies being where i store them as line 12!.  genre being what i want back(genre found by putting api into an json formatter)
      console.log(data.search); //to make sure you get data back 
      });
      
  }


}
