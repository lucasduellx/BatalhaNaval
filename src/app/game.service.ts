import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DadosGlobaisService } from './dados-globais.service';

@Injectable({
  providedIn : 'root'
})
export class GameService {
  tamanhoMapa : number[] = [];
  qntNavios : number[] = [];

  validaGame(tamanhoMapa : number, navio : number): boolean{
    if(navio > Math.trunc((Math.pow(tamanhoMapa,2) - ((tamanhoMapa*2)))/3 -2) || tamanhoMapa > 26 || tamanhoMapa < 4){
      return false;
    }
    return true;
  }

  criaSinglePlayer(tamanhoMapa: number, navio: number){
    if (this.tamanhoMapa.length != 0){
      this.tamanhoMapa = [];
      this.qntNavios = [];
    }

    for (let i = 0; i < tamanhoMapa; i++){
      this.tamanhoMapa.push(i);
    }
    
    for (let i = 0; i < navio; i++){
      this.qntNavios.push(i);
    }
    this.router.navigate(['/singlePlayer']);
  }

  criaOneVsOne(tamanhoMapa: number, navio: number){
    if (this.tamanhoMapa.length != 0){
      this.tamanhoMapa = [];
      this.qntNavios = [];
    }

    for (let i = 0; i < tamanhoMapa; i++){
      this.tamanhoMapa.push(i);
    }
    
    for (let i = 0; i < navio; i++){
      this.qntNavios.push(i);
    }
    this.router.navigate(['/oneVsOne']);
  }

  constructor(private router: Router) 
  {
  }
}
