import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { PipesPipepe } from './app-pipes/pipes.pipe';

@NgModule({
  declarations: [
    AppDialogosComponent,
    PipesPipepe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppDialogosComponent,
    PipesPipepe
  ]
})
export class AppCompartilhadoModule { }
