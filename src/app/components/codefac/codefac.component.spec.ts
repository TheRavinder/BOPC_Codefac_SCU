import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodefacComponent } from './codefac.component';

describe('CodefacComponent', () => {
  let component: CodefacComponent;
  let fixture: ComponentFixture<CodefacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodefacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodefacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
