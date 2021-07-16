import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridSummaryComponent } from './hybrid-summary.component';

describe('SummaryComponent', () => {
  let component: HybridSummaryComponent;
  let fixture: ComponentFixture<HybridSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
