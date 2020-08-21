import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';
import { AcoesService } from './acoes.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  acoes: Acoes;

  constructor(private acoesService: AcoesService) {}

  ngOnInit() {
    this.acoesService.getAcoes().subscribe((acoes) => {
      this.acoes = acoes;
    });
  }
}
