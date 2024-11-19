import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWaxServiceComponent } from './body-wax-service.component';

describe('BodyWaxServiceComponent', () => {
  let component: BodyWaxServiceComponent;
  let fixture: ComponentFixture<BodyWaxServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWaxServiceComponent]
    });
    fixture = TestBed.createComponent(BodyWaxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
