import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFormComponent } from './portfolio-form.component';

describe('PortfolioFormComponent', () => {
  let component: PortfolioFormComponent;
  let fixture: ComponentFixture<PortfolioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
