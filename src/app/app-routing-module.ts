import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Game1playerComponent } from './game1player/game1player.component';
import { OneVsOneComponent } from './one-vs-one/one-vs-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TelaConfigComponent } from './tela-config/tela-config.component';

const routes: Routes = [
  { path: 'singlePlayer', component: Game1playerComponent },
  { path: 'oneVsOne', component: OneVsOneComponent },
  { path: 'config', component: TelaConfigComponent },
  { path: '', redirectTo:'config', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
