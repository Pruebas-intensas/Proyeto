import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModalAgregarProductoComponent } from './modal-agregar-producto.component';

describe('ModalAgregarProductoComponent', () => {
  let component: ModalAgregarProductoComponent;
  let fixture: ComponentFixture<ModalAgregarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalAgregarProductoComponent]
    });
    fixture = TestBed.createComponent(ModalAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
