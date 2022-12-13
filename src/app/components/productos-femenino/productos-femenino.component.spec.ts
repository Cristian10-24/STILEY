import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFemeninoComponent } from './productos-femenino.component';

describe('ProductosFemeninoComponent', () => {
  let component: ProductosFemeninoComponent;
  let fixture: ComponentFixture<ProductosFemeninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosFemeninoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosFemeninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
