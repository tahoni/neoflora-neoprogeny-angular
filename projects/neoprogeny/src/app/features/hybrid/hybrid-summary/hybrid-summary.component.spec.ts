import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridSummaryComponent } from './hybrid-summary.component';

describe('HybridSummaryComponent', () => {
  let component: HybridSummaryComponent;
  let fixture: ComponentFixture<HybridSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
