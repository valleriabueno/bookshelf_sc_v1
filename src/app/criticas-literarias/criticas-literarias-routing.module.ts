import { CriticasComponent } from '../criticas-literarias/criticas/criticas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:CriticasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticasLiterariasRoutingModule { }
