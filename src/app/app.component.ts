import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { TesteLogicoPage } from '../pages/teste-logico/teste-logico';
import { VideoAulaPage } from '../pages/video-aula/video-aula';
import { IntoPage } from '../pages/into/into';


@Component({
  templateUrl: 'app.html'
  
  
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = IntoPage;
  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPageHome(){
    this.nav.setRoot(HomePage);
  }

  openPageTesteLogico() {
    this.nav.setRoot(TesteLogicoPage);
  }
  openPageQuiz() {
    this.nav.setRoot(QuizPage);
  }
  openPageVideoAula() {
    this.nav.setRoot(VideoAulaPage);
  }


}
