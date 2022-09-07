import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirDemanda2Component } from './abrir-demanda2.component';

describe('AbrirDemanda2Component', () => {
  let component: AbrirDemanda2Component;
  let fixture: ComponentFixture<AbrirDemanda2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirDemanda2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirDemanda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
