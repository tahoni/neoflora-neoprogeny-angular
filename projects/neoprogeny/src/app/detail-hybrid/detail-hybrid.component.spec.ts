import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHybridComponent } from './detail-hybrid.component';

describe('DetailCrudComponent', () => {
  let component: DetailHybridComponent;
  let fixture: ComponentFixture<DetailHybridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHybridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
