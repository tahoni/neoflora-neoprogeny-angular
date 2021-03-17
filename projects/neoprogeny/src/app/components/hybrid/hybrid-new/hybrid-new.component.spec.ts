import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridNewComponent } from './hybrid-new.component';

describe('NewComponent', () => {
  let component: HybridNewComponent;
  let fixture: ComponentFixture<HybridNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
