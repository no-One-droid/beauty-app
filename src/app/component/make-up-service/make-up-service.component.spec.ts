import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUpServiceComponent } from './make-up-service.component';

describe('MakeUpServiceComponent', () => {
  let component: MakeUpServiceComponent;
  let fixture: ComponentFixture<MakeUpServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeUpServiceComponent]
    });
    fixture = TestBed.createComponent(MakeUpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
