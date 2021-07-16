import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridListHeadComponent } from './hybrid-list-head.component';

describe('ListHeadComponent', () => {
  let component: HybridListHeadComponent;
  let fixture: ComponentFixture<HybridListHeadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridListHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridListHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
