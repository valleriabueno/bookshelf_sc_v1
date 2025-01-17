import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { DireitoComponent } from './direito/direito.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'direito', component: DireitoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'psicologia', component: PsicologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sugestoes', component: SugestoesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'tecnologia', component: TecnologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'empreendedorismo', component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'mais_vendidos', component: MaisVendidosComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'criticas',
    loadChildren: () => import('./criticas-literarias/criticas-literarias.module').then(c => c.CriticasLiterariasModule),
    ...canActivate(enviarSemLogin) // ???????????
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
