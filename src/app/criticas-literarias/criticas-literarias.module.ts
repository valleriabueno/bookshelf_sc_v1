import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriticasLiterariasRoutingModule } from './criticas-literarias-routing.module';
import { CriticasComponent } from './criticas/criticas.component';
import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from '../app-compartilhado/app-compartilhado.module';
import { LerMaisComponent } from './ler-mais/ler-mais.component';


@NgModule({
  declarations: [
    CriticasComponent,
    LerMaisComponent
  ],
  imports: [
    CommonModule,
    CriticasLiterariasRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule
  ]
})
export class CriticasLiterariasModule { }
