import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHybridComponent } from './view-hybrid.component';

describe('DetailViewComponent', () => {
  let component: ViewHybridComponent;
  let fixture: ComponentFixture<ViewHybridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHybridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
