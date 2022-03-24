import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclesComponent } from './life-cycles.component';

describe('LifeCyclesComponent', () => {
  let component: LifeCyclesComponent;
  let fixture: ComponentFixture<LifeCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
