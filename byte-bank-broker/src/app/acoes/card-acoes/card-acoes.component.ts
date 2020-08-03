import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-acoes',
  templateUrl: './card-acoes.component.html',
  styleUrls: ['./card-acoes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardAcoesComponent implements OnInit {
  @Input() acao: any;

  constructor() {}

  ngOnInit(): void {}
}
