import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhSelectComponent } from './mh-select.component';

describe('MhSelectComponent', () => {
  let component: MhSelectComponent;
  let fixture: ComponentFixture<MhSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
