import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubleDataComponent } from './cuble-data.component';

describe('CubleDataComponent', () => {
  let component: CubleDataComponent;
  let fixture: ComponentFixture<CubleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
