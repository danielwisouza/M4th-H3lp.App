import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TesteLogicoPage } from '../teste-logico/teste-logico';
import { QuizPage } from '../quiz/quiz';
import { VideoAulaPage } from '../video-aula/video-aula';
import { IntoPage } from '../into/into';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPageTesteLogico() {
    this.navCtrl.push(TesteLogicoPage);
  }
  openPageQuiz() {
    this.navCtrl.push(QuizPage);
  }
  openPageVideoAula() {
    this.navCtrl.push(VideoAulaPage);
  }
  openPageSobre() {
    this.navCtrl.push(IntoPage);
  }

  //Aqui está o botão sair
  thisClose(){
    this.navCtrl.pop ();
  }
}

