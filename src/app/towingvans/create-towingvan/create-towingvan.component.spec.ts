import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTowingvanComponent } from './create-towingvan.component';

describe('CreateTowingvanComponent', () => {
  let component: CreateTowingvanComponent;
  let fixture: ComponentFixture<CreateTowingvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTowingvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTowingvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
