import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'cdd'},
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd-routing.module').then(m => m.CddRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
