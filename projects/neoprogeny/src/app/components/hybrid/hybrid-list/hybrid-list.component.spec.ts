import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridListComponent } from './hybrid-list.component';

describe('ListComponent', () => {
  let component: HybridListComponent;
  let fixture: ComponentFixture<HybridListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
