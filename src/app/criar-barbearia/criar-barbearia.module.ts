import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarBarbeariaPageRoutingModule } from './criar-barbearia-routing.module';

import { CriarBarbeariaPage } from './criar-barbearia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarBarbeariaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarBarbeariaPage]
})
export class CriarBarbeariaPageModule {}
