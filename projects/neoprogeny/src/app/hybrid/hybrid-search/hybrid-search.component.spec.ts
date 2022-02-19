import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridSearchComponent } from './hybrid-search.component';

describe('HybridSearchComponent', () => {
  let component: HybridSearchComponent;
  let fixture: ComponentFixture<HybridSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
