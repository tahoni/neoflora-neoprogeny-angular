import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridSearchSimpleComponent } from './hybrid-search-simple.component';

describe('SearchSimpleComponent', () => {
  let component: HybridSearchSimpleComponent;
  let fixture: ComponentFixture<HybridSearchSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridSearchSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSearchSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
