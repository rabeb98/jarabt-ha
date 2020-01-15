import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOwnerRegisterComponent } from './product-owner-register.component';

describe('ProductOwnerRegisterComponent', () => {
  let component: ProductOwnerRegisterComponent;
  let fixture: ComponentFixture<ProductOwnerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOwnerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOwnerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
