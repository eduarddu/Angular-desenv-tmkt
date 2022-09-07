import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaRapidaComponent } from './busca-rapida.component';

describe('BuscaRapidaComponent', () => {
  let component: BuscaRapidaComponent;
  let fixture: ComponentFixture<BuscaRapidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaRapidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
