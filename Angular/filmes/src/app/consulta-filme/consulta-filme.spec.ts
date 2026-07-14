import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFilme } from './consulta-filme';

describe('ConsultaFilme', () => {
  let component: ConsultaFilme;
  let fixture: ComponentFixture<ConsultaFilme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaFilme],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaFilme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
