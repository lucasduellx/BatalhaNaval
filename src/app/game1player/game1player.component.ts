import { Component, OnInit } from '@angular/core';
import { MapaService } from '../mapa.service';
import { DadosGlobaisService } from '../dados-globais.service'
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game1player',
  templateUrl: './game1player.component.html',
  styleUrls: ['./game1player.component.css'],
  providers:[MapaService]
})
export class Game1playerComponent implements OnInit {
  mapaAtual: MapaService;
  
  resposta: boolean = false;

  messagem : string;
  status : string = "Começou";
  strResposta: string = 'Respostas';

  qntTiros: number;


  atira(evento){
    if (!this.mapaAtual.fimDeJogo){
      if (this.mapaAtual.atira(evento.i, evento.j)){
        this.qntTiros--;
        this.status = "ERROU";
      }
      else{
        this.status = "ACERTOU";    
      }
    }

    if (this.qntTiros == 0){
      this.status = "RIP";
      this.messagem = "Soldado Abatido!";
      this.mapaAtual.encerraJogo();
    }

    if(this.mapaAtual.naviosRestantes == 0){
        this.status = "Parabains";
        this.messagem = "Soldado Promovido!";
        this.mapaAtual.encerraJogo();
      }
  }  

  mostraRespostas(){
    this.resposta = !this.resposta;
    if (this.resposta)
      this.strResposta = 'Meu Jogo';
    else
      this.strResposta = 'Respostas';
  }

  comecaJogo(){
    this.mapaAtual = new MapaService(this.gameService.tamanhoMapa.length,this.gameService.qntNavios.length);
  }

  constructor(public gameService : GameService, private Route : Router) 
  {
  }

  voltaHome(){
    this.Route.navigate(['/config']);
  }

  ngOnInit(): void{
    this.comecaJogo();
    this.qntTiros = this.mapaAtual.tamanhoMapa * 2;
    if (this.gameService.tamanhoMapa.length == 0){
      this.voltaHome();
    }
  }
}