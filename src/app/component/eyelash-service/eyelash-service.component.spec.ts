import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyelashServiceComponent } from './eyelash-service.component';

describe('EyelashServiceComponent', () => {
  let component: EyelashServiceComponent;
  let fixture: ComponentFixture<EyelashServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyelashServiceComponent]
    });
    fixture = TestBed.createComponent(EyelashServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
