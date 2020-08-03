import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css'],
})
export class PortfolioFormComponent implements OnInit {
  public readonly serviceApi = 'http://localhost:3000/portfolios';
  title = 'Novo portfolio';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/home/portfolio',
    save: '/home/portfolio',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'portfolio_id', key: true, visible: false },
    {
      label: 'Descrição',
      property: 'portfolio_descricao',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.id ? 'Editando' : 'Novo portfolio';
    });
  }
}
