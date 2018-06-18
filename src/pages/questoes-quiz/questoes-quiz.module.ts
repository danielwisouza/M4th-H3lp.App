import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestoesQuizPage } from './questoes-quiz';

@NgModule({
  declarations: [
    QuestoesQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestoesQuizPage),
  ],
})
export class QuestoesQuizPageModule {}
