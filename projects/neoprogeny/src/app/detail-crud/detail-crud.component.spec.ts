import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCrudComponent } from './detail-crud.component';

describe('DetailCrudComponent', () => {
  let component: DetailCrudComponent;
  let fixture: ComponentFixture<DetailCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
