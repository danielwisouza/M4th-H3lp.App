import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VideoAulaPage } from '../video-aula/video-aula';
import { TesteLogicoPage } from '../teste-logico/teste-logico';
import { QuizPage } from '../quiz/quiz';


/**
 * Generated class for the QuestoesQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questoes-quiz',
  templateUrl: 'questoes-quiz.html',
})

export class QuestoesQuizPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestoesQuizPage');
  }
  public dados(contagem){
    contagem=contagem+1;
  }
  showConfirm(a) {
    const confirm = this.alertCtrl.create({
      title: 'Alerta saída do quiz',
      message: 'Deseja interromper o quiz?',
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
            if (a ==1){this.navCtrl.setRoot(HomePage);};
            if (a ==2){this.navCtrl.push(VideoAulaPage)};
            if (a ==3){this.navCtrl.push(TesteLogicoPage)};
            if (a ==4){this.navCtrl.push(QuizPage)};
          }
        }
      ]
    });
    confirm.present();
  }
}
