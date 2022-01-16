import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalExpenseGraphComponent } from './personal-expense-graph.component';

describe('PersonalExpenseGraphComponent', () => {
  let component: PersonalExpenseGraphComponent;
  let fixture: ComponentFixture<PersonalExpenseGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalExpenseGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalExpenseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
