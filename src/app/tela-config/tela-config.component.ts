import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-tela-config',
  templateUrl: './tela-config.component.html',
  styleUrls: ['./tela-config.component.css']
})
export class TelaConfigComponent{

  constructor(private router: Router,private Game : GameService) { }

  iniciaGame(quantidade: number, navios: number, categoria: Categoria){
    let gameValidado = this.Game.validaGame(quantidade, navios);
    if (!gameValidado){
      alert("Jogo Invalido");
    }
    else if (gameValidado && categoria == Categoria.singlePlayer){
      this.Game.criaSinglePlayer(quantidade, navios);
    }
    else if (gameValidado && categoria == Categoria.oneVsOne){
      this.Game.criaOneVsOne(quantidade, navios);
    }
  }
}

enum Categoria{
  singlePlayer = 0,
  oneVsOne = 1
}
