import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridListHeadComponent } from './hybrid-list-head.component';

describe('ListHeadComponent', () => {
  let component: HybridListHeadComponent;
  let fixture: ComponentFixture<HybridListHeadComponent>;

  beforeEach(async(() => {
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
