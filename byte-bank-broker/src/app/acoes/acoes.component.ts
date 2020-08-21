import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';
import { AcoesService } from './acoes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  acoesInput = new FormControl();
  acoes: Acoes;
  private subscription: Subscription;

  constructor(private acoesService: AcoesService) {}

  ngOnInit() {
    this.subscription = this.acoesService.getAcoes().subscribe((acoes) => {
      this.acoes = acoes;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
