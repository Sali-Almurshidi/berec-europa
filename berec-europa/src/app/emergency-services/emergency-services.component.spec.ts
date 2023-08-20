import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyServicesComponent } from './emergency-services.component';

describe('EmergencyServicesComponent', () => {
  let component: EmergencyServicesComponent;
  let fixture: ComponentFixture<EmergencyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyServicesComponent]
    });
    fixture = TestBed.createComponent(EmergencyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
