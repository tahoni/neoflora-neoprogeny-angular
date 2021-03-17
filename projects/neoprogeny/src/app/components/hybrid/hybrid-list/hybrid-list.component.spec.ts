import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridListComponent } from './hybrid-list.component';

describe('ListComponent', () => {
  let component: HybridListComponent;
  let fixture: ComponentFixture<HybridListComponent>;

  beforeEach(async(() => {
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
