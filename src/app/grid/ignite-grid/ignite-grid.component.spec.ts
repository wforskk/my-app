import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgniteGridComponent } from './ignite-grid.component';

describe('IgniteGridComponent', () => {
  let component: IgniteGridComponent;
  let fixture: ComponentFixture<IgniteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgniteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgniteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
