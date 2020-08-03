import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcoesComponent } from './card-acoes.component';

describe('StockCardComponent', () => {
  let component: CardAcoesComponent;
  let fixture: ComponentFixture<CardAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
