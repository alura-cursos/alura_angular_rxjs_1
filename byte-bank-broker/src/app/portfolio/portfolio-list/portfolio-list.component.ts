import { Component } from '@angular/core';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent {
  public readonly serviceApi = 'http://localhost:3000/portfolios';

  public readonly actions: PoPageDynamicTableActions = {
    new: '/home/portfolio/new',
    detail: '/home/portfolio/detail/:id',
    remove: true,
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Portfolio' }],
  };

  public readonly fields: Array<any> = [
    { property: 'portfolio_id', key: true },
    {
      property: 'portfolio_descricao',
      label: 'Descrição',
      filter: true,
      gridColumns: 6,
    },
  ];
}
