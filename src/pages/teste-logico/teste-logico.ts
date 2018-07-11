import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuestoesTestePage } from '../questoes-teste/questoes-teste';
import { QuizPage } from '../quiz/quiz';
import { VideoAulaPage } from '../video-aula/video-aula';
import { IntoPage } from '../into/into';
import { HomePage } from '../home/home';
/**
 * Generated class for the TesteLogicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-logico',
  templateUrl: 'teste-logico.html',
})
export class TesteLogicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteLogicoPage');
  }
  showAlert() {
    const confirm = this.alertCtrl.create({
      title: 'Alerta início do Teste',
      message: 'Atenção a teste já vai começar, Deseja realmente continuar?',
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
          this.navCtrl.setRoot(QuestoesTestePage);
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

