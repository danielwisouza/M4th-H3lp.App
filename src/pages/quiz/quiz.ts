import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuestoesQuizPage } from '../questoes-quiz/questoes-quiz';
import { TesteLogicoPage } from '../teste-logico/teste-logico';
import { VideoAulaPage } from '../video-aula/video-aula';
import { IntoPage } from '../into/into';
import { HomePage } from '../home/home';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Alerta inicio do Quiz',
      message: 'O Quiz já vai começar, Deseja continuar?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.setRoot(QuestoesQuizPage);
          }
        }
      ]
    });
    confirm.present();
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
    this.navCtrl.setRoot(IntoPage);
  }
  openPageHome() {
    this.navCtrl.setRoot(HomePage);
  }

  //Aqui está o botão sair
  thisClose(){
    this.navCtrl.pop();
  }
}
