import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteRowComponent } from './teste-row.component';

describe('TesteRowComponent', () => {
  let component: TesteRowComponent;
  let fixture: ComponentFixture<TesteRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
