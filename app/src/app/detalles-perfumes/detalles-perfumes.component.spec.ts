import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPerfumesComponent } from './detalles-perfumes.component';

describe('DetallesPerfumesComponent', () => {
  let component: DetallesPerfumesComponent;
  let fixture: ComponentFixture<DetallesPerfumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPerfumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPerfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
