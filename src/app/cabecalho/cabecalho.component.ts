import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  corInstagram: boolean[] = new Array(3);

  trocaCor(i: number){
    this.corInstagram[i] = !this.corInstagram[i];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
