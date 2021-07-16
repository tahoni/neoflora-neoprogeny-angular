import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridListRowComponent } from './hybrid-list-row.component';

describe('ListRowComponent', () => {
  let component: HybridListRowComponent;
  let fixture: ComponentFixture<HybridListRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
