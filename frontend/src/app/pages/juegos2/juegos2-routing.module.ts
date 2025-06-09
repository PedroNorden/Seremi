import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Juegos2Page } from './juegos2.page';

const routes: Routes = [
  {
    path: '',
    component: Juegos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Juegos2PageRoutingModule {}
