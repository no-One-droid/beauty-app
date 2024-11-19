import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailServiceComponent } from './nail-service.component';

describe('NailServiceComponent', () => {
  let component: NailServiceComponent;
  let fixture: ComponentFixture<NailServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NailServiceComponent]
    });
    fixture = TestBed.createComponent(NailServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
