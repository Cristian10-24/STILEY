import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMasculinosComponent } from './productos-masculinos.component';

describe('ProductosMasculinosComponent', () => {
  let component: ProductosMasculinosComponent;
  let fixture: ComponentFixture<ProductosMasculinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosMasculinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosMasculinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
