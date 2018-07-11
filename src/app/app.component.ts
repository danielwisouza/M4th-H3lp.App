import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { TesteLogicoPage } from '../pages/teste-logico/teste-logico';
import { VideoAulaPage } from '../pages/video-aula/video-aula';
import { IntoPage } from '../pages/into/into';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [
  ConfigProvider
] 
  
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = IntoPage;
  

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public configProvider: ConfigProvider)
  {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      let config = this.configProvider.getConfigDate();
      if (config == null){
        this.rootPage =  IntoPage;
        this.configProvider.setConfigDate(false);
      }else{
        this.rootPage = HomePage;
      }
      console.log(config);

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
