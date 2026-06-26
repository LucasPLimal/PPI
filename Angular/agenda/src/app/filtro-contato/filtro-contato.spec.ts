import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaService } from '../model/agenda-service';
import { FiltroContato } from './filtro-contato';

describe('FiltroContato', () => {
  let component: FiltroContato;
  let fixture: ComponentFixture<FiltroContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroContato],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the favorite filter state', () => {
    const agendaService = TestBed.inject(AgendaService);
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button).toBeTruthy();
    expect(agendaService.estaFiltrandoFavoritos()).toBeFalse();

    button.click();
    fixture.detectChanges();

    expect(agendaService.estaFiltrandoFavoritos()).toBeTrue();
  });
});
