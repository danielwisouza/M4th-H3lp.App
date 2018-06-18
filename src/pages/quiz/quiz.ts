import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuestoesQuizPage } from '../questoes-quiz/questoes-quiz';
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
      message: 'O Quiz esta preste a iniciar, Deseja continuar?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.push(QuestoesQuizPage);
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
