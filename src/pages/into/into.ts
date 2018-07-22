import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-into',
  templateUrl: 'into.html',
})
export class IntoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntoPage');
  }
  openPageHome(){
    this.navCtrl.setRoot(HomePage);
  }
}