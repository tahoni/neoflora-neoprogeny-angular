import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridListRowComponent } from './hybrid-list-row.component';

describe('HybridListRowComponent', () => {
  let component: HybridListRowComponent;
  let fixture: ComponentFixture<HybridListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
