import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeroDetailComponent } from './dero-detail.component';

describe('DeroDetailComponent', () => {
  let component: DeroDetailComponent;
  let fixture: ComponentFixture<DeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
