import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclesImplementationComponent } from './life-cycles-implementation.component';

describe('LifeCyclesImplementationComponent', () => {
  let component: LifeCyclesImplementationComponent;
  let fixture: ComponentFixture<LifeCyclesImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCyclesImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCyclesImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
