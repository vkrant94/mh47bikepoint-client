import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhInputComponent } from './mh-input.component';

describe('MhInputComponent', () => {
  let component: MhInputComponent;
  let fixture: ComponentFixture<MhInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
