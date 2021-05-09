import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  fimDeJogo : boolean = false;

  naviosRestantes: number;
  tamanhoMapa: number;
  qntNavios: number;

  posicao: Ponto[][];
  navios: Navio[];

  constructor(tamanhoMapa: number, qntNavios: number) {
    
    this.posicao = new Array<Ponto[]>(tamanhoMapa);
    this.tamanhoMapa = tamanhoMapa;
    this.qntNavios = qntNavios; 
    this.naviosRestantes = qntNavios;

    for (let i = 0; i < this.tamanhoMapa; i++) {
      this.posicao[i] = new Array(tamanhoMapa);
      for(let j = 0; j < this.tamanhoMapa; j++){
        this.posicao[i][j] = new Ponto(i, j, Perfil.mar); 
      }
    }

    this.sorteia();

  }

  verificaTiro(i: number, j: number){
    
    if (this.posicao[i][j].perfil == Perfil.mar){
      this.posicao[i][j].estado = Estado.errou;
    }
    else{
      this.posicao[i][j].estado = Estado.acertou;

      this.navios[this.posicao[i][j].idNavio].partesMortas++;
      let partesMortas = this.navios[this.posicao[i][j].idNavio].partesMortas;
      let tamanhoNavios = this.navios[this.posicao[i][j].idNavio].tamanho;
      if (partesMortas == tamanhoNavios){
        this.naviosRestantes--;
      }
    }
  }

  validaTiro(i: number, j: number): boolean{

    if (this.posicao[i][j].estado != Estado.padrao){
      return false;
    }
    else{
      return true;
    }
  }
  
  atira(i: number, j: number): boolean{
    
    if (!this.validaTiro(i, j)){
      return false;
    }

    //console.log('Você atirou em ' + i + j);
    //this.messagem = "Você atirou em : "+ i + j;

    this.verificaTiro(i, j);

    return true;
  }

  sorteia(){
    this.navios = new Array();
    for (let i = 0; i < this.qntNavios; i++){
      // Por enquanto tamanho do navio varia de 2 a 3
      let tamanhoNavio = Math.floor(Math.random() * 2) + 2;
      let direcao = Math.floor(Math.random() * 2);

      this.navios.push(new Navio(tamanhoNavio));

      let x: number;
      let y: number;

      if (direcao == Direcao.horizontal){
        do {
          x = Math.floor(Math.random() * (this.tamanhoMapa - tamanhoNavio + 1));
          y = Math.floor(Math.random() * this.tamanhoMapa);
        } while (!this.validaNavio(x, y, tamanhoNavio, direcao));

      }
      else {
        do {
          x = Math.floor(Math.random() * this.tamanhoMapa);
          y = Math.floor(Math.random() * (this.tamanhoMapa - tamanhoNavio + 1));
        } while (!this.validaNavio(x, y, tamanhoNavio, direcao));
         
      }
      for (let j = 0; j < tamanhoNavio; j++){
        this.posicao[x][y].perfil = Perfil.navio;
        this.posicao[x][y].idNavio = i;
        
        direcao == Direcao.horizontal ? x++ : y++;

        let aux = y + j;
        console.log("" + x + aux);
      }

    }
  }

  validaNavio(x: number, y: number, tamanhoNavio: number, direcao: Direcao): boolean{
    if (direcao == Direcao.vertical){
      for (let i = 0; i < tamanhoNavio; i++){
        if (this.posicao[x][y + i].perfil == Perfil.navio){
          return false;
        }
      }
    }

    if (direcao == Direcao.horizontal){
      for (let i = 0; i < tamanhoNavio; i++){
        if (this.posicao[x + i][y].perfil == Perfil.navio){
          return false;
        }
      }
    }

    return true;
  }

  encerraJogo(){
    this.fimDeJogo = true;
  }
}


enum Direcao{
  vertical = 0,
  horizontal = 1
}

enum Perfil{
  mar = 0,
  navio = 1
}

enum Estado{
  padrao = 0,
  errou = 1,
  acertou = 2
}

class Ponto{
  
  perfil: Perfil;
  estado: Estado = Estado.padrao;
  x: number;
  y: number;
  // -1 não existe navio
  idNavio: number = -1;

  //Add ao construtor um parametro perfil
  constructor(x: number, y: number, perfil: Perfil){

    this.x = x;
    this.y = y;
    this.perfil = perfil;
  }
}

class Navio{
  tamanho: number;
  partesMortas: number = 0;

  constructor(tamanho: number){
    this.tamanho = tamanho;
  }
}


