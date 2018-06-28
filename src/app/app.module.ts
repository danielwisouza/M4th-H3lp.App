import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TesteLogicoPageModule } from '../pages/teste-logico/teste-logico.module';
import { QuizPageModule } from '../pages/quiz/quiz.module';
import { VideoAulaPageModule } from '../pages/video-aula/video-aula.module';
import { IntoPageModule } from '../pages/into/into.module';
import { QuestoesQuizPageModule } from '../pages/questoes-quiz/questoes-quiz.module';
import { QuestoesTestePageModule } from '../pages/questoes-teste/questoes-teste.module';
import { MoovieProvider } from '../providers/moovie/moovie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TesteLogicoPageModule,
    QuizPageModule,
    VideoAulaPageModule,
    IntoPageModule,
    QuestoesQuizPageModule,
    QuestoesTestePageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider
  ]
})
export class AppModule {}
