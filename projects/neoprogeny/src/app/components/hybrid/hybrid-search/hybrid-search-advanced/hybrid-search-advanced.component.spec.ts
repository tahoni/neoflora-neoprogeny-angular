import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridSearchAdvancedComponent } from './hybrid-search-advanced.component';

describe('SearchAdvancedComponent', () => {
  let component: HybridSearchAdvancedComponent;
  let fixture: ComponentFixture<HybridSearchAdvancedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridSearchAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSearchAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
