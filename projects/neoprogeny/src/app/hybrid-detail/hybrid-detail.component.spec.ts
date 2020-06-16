import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridDetailComponent } from './hybrid-detail.component';

describe('DetailComponent', () => {
  let component: HybridDetailComponent;
  let fixture: ComponentFixture<HybridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
