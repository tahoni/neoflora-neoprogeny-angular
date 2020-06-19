import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TahoniComponent } from './tahoni.component';

describe('TahoniComponent', () => {
  let component: TahoniComponent;
  let fixture: ComponentFixture<TahoniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahoniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
