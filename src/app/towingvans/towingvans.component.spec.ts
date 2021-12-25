import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowingvansComponent } from './towingvans.component';

describe('TowingvansComponent', () => {
  let component: TowingvansComponent;
  let fixture: ComponentFixture<TowingvansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowingvansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowingvansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
