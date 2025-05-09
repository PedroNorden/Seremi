import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Juegos2PageRoutingModule } from './juegos2-routing.module';

import { Juegos2Page } from './juegos2.page';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Juegos2PageRoutingModule
  ],
  declarations: [Juegos2Page]
})
export class Juegos2PageModule {}
