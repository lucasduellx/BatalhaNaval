import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { MapaService } from '../mapa.service';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Output() shoot = new EventEmitter();

  @Input() resposta: boolean;
  @Input() mapaAtual: MapaService;
  
  constructor(public gameService: GameService) { }

  transformaEmLetra(comeco: number, i: number): string{
    return String.fromCharCode(comeco + i);
  }

  atira(i: number, j: number){
    this.shoot.emit({
      i: i,
      j: j
    });
    
  }

  ngOnInit(): void {
  }

}
