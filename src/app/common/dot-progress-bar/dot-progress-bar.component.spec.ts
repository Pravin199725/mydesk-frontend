import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProgressBarComponent } from './dot-progress-bar.component';

describe('DotProgressBarComponent', () => {
  let component: DotProgressBarComponent;
  let fixture: ComponentFixture<DotProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
