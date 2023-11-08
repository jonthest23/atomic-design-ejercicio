import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCursoComponent } from './tarjeta-curso.component';

describe('TarjetaCursoComponent', () => {
  let component: TarjetaCursoComponent;
  let fixture: ComponentFixture<TarjetaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaCursoComponent]
    });
    fixture = TestBed.createComponent(TarjetaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
