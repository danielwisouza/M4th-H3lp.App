import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuestoesTestePage } from '../questoes-teste/questoes-teste';
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
}

