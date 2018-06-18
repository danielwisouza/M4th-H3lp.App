import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TesteLogicoPage } from '../teste-logico/teste-logico';
import { QuizPage } from '../quiz/quiz';
import { VideoAulaPage } from '../video-aula/video-aula';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPageHome(){
    this.navCtrl.setRoot(HomePage);
  }

  openPageTesteLogico() {
    this.navCtrl.setRoot(TesteLogicoPage);
  }
  openPageQuiz() {
    this.navCtrl.setRoot(QuizPage);
  }
  openPageVideoAula() {
    this.navCtrl.setRoot(VideoAulaPage);
  }
  openPageSobre() {
    this.navCtrl.setRoot(SobrePage);
  }

  //Aqui está o botão sair
  thisClose(){
    this.navCtrl.pop ();
  }
}

