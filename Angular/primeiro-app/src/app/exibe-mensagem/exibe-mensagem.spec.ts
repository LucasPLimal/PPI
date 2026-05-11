import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeMensagem } from './exibe-mensagem';

describe('ExibeMensagem', () => {
  let component: ExibeMensagem;
  let fixture: ComponentFixture<ExibeMensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeMensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibeMensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
