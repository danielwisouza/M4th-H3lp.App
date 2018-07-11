import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VideoAulaPage } from '../video-aula/video-aula';
import { TesteLogicoPage } from '../teste-logico/teste-logico';
import { QuizPage } from '../quiz/quiz';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the QuestoesTestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questoes-teste',
  templateUrl: 'questoes-teste.html',
})
export class QuestoesTestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestoesTestePage');
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
            if (a ==3){this.navCtrl.push(QuizPage)};
            if (a ==4){this.navCtrl.push(TesteLogicoPage)};
          }
        }
      ]
    });
    confirm.present();
  }

}
