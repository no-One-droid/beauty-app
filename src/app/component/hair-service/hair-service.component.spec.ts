import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairServiceComponent } from './hair-service.component';

describe('HairServiceComponent', () => {
  let component: HairServiceComponent;
  let fixture: ComponentFixture<HairServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairServiceComponent]
    });
    fixture = TestBed.createComponent(HairServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
