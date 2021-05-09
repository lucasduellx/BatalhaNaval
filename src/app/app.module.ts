import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module'
import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { Game1playerComponent } from './game1player/game1player.component';
import { DadosGlobaisService } from './dados-globais.service';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TelaConfigComponent } from './tela-config/tela-config.component';
import { MapaComponent } from './mapa/mapa.component';
import { OneVsOneComponent } from './one-vs-one/one-vs-one.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1playerComponent,
    CabecalhoComponent,
    RodapeComponent,
    PageNotFoundComponent,
    TelaConfigComponent,
    MapaComponent,
    OneVsOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GameService,
    DadosGlobaisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
