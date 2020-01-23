import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarBarbeariaPage } from './criar-barbearia.page';

const routes: Routes = [
  {
    path: '',
    component: CriarBarbeariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarBarbeariaPageRoutingModule {}
