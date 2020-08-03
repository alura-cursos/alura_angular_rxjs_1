import { TestBed } from '@angular/core/testing';

import { AcoesService } from './acoes.service';

describe('StockService', () => {
  let service: AcoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
