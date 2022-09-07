import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirDemandaComponent } from './abrir-demanda.component';

describe('AbrirDemandaComponent', () => {
  let component: AbrirDemandaComponent;
  let fixture: ComponentFixture<AbrirDemandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirDemandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
