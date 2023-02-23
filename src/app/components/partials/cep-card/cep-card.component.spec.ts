import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepCardComponent } from './cep-card.component';

describe('CepCardComponent', () => {
  let component: CepCardComponent;
  let fixture: ComponentFixture<CepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
