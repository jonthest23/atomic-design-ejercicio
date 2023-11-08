import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonHeaderComponent } from './boton-header.component';

describe('BotonHeaderComponent', () => {
  let component: BotonHeaderComponent;
  let fixture: ComponentFixture<BotonHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonHeaderComponent]
    });
    fixture = TestBed.createComponent(BotonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
