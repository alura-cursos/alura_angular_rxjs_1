import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesComponent } from './acoes.component';

describe('StockComponent', () => {
  let component: AcoesComponent;
  let fixture: ComponentFixture<AcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
