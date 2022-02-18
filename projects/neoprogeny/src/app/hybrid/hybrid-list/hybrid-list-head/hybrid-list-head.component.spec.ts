import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridListHeadComponent } from './hybrid-list-head.component';

describe('HybridListHeadComponent', () => {
  let component: HybridListHeadComponent;
  let fixture: ComponentFixture<HybridListHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridListHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridListHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
