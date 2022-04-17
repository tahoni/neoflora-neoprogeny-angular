import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridEditComponent } from './hybrid-edit.component';

describe('HybridEditComponent', () => {
  let component: HybridEditComponent;
  let fixture: ComponentFixture<HybridEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
