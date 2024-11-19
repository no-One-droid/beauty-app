import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialServiceComponent } from './facial-service.component';

describe('FacialServiceComponent', () => {
  let component: FacialServiceComponent;
  let fixture: ComponentFixture<FacialServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacialServiceComponent]
    });
    fixture = TestBed.createComponent(FacialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
