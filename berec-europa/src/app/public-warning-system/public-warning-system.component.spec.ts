import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWarningSystemComponent } from './public-warning-system.component';

describe('PublicWarningSystemComponent', () => {
  let component: PublicWarningSystemComponent;
  let fixture: ComponentFixture<PublicWarningSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicWarningSystemComponent]
    });
    fixture = TestBed.createComponent(PublicWarningSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
