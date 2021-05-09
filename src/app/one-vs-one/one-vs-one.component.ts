import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MapaService } from '../mapa.service';
import { GameService } from '../game.service'


@Component({
  selector: 'app-one-vs-one',
  templateUrl: './one-vs-one.component.html',
  styleUrls: ['./one-vs-one.component.css']
})
export class OneVsOneComponent implements OnInit {

  mapaAtual: MapaService[] = new Array(2);
  turno: Turno = Turno.player1;
  resposta: boolean = false;
  strResposta: string = 'Respostas';

  naviosRestantes: number[] = new Array(2);

  atira(evento, mapaAtirado){
    if (!this.mapaAtual[this.turno].fimDeJogo){
      if (mapaAtirado == this.turno){
        if (this.mapaAtual[this.turno].atira(evento.i, evento.j)){
          this.turno = (this.adversario());
          if (this.mapaAtual[this.adversario()].naviosRestantes != this.naviosRestantes[this.adversario()]){
            this.naviosRestantes[this.adversario()] = this.mapaAtual[this.adversario()].naviosRestantes;
            alert(`DERRUBOU UM NAVIO! FALTAM ${this.naviosRestantes[this.adversario()]}`);
          }
        }
        else
          return;
      }
      else{
        alert("Não é sua vez!");
        return;
      }

      if (this.naviosRestantes[this.adversario()] == 0){
        alert(`PARABÉNS! Jogador ${this.turno} ganhou! `)
        this.mapaAtual[this.turno].encerraJogo();
        this.mapaAtual[this.adversario()].encerraJogo();
      }
    }
  }  

  adversario(): Turno{
    return this.turno == Turno.player1 ? Turno.player2 : Turno.player1;
  }

  mostraRespostas(){
    this.resposta = !this.resposta;
    if (this.resposta)
      this.strResposta = 'Meu Jogo';
    else
      this.strResposta = 'Respostas';
  }

  comecaJogo(){
    this.mapaAtual[0] = new MapaService(this.gameService.tamanhoMapa.length,this.gameService.qntNavios.length);
    this.mapaAtual[1] = new MapaService(this.gameService.tamanhoMapa.length,this.gameService.qntNavios.length);

    this.naviosRestantes[0] = this.mapaAtual[0].naviosRestantes;
    this.naviosRestantes[1] = this.mapaAtual[1].naviosRestantes;
  }

  constructor(public gameService : GameService, private Route : Router) 
  {
  }

  voltaHome(){
    this.Route.navigate(['/config']);
  }

  ngOnInit(): void{
    this.comecaJogo();
    if (this.gameService.tamanhoMapa.length == 0){
      this.voltaHome();
    }
  }

}

enum Turno{
  player1 = 0,
  player2 = 1
}
