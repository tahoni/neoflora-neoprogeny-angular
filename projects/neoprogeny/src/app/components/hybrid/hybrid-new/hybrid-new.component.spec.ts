import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridNewComponent } from './hybrid-new.component';

describe('NewComponent', () => {
  let component: HybridNewComponent;
  let fixture: ComponentFixture<HybridNewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
