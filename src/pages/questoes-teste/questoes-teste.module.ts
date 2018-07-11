import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestoesTestePage } from './questoes-teste';

@NgModule({
  declarations: [
    QuestoesTestePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestoesTestePage),
  ],
})
export class QuestoesTestePageModule {}
