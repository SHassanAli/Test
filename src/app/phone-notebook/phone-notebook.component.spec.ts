import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNotebookComponent } from './phone-notebook.component';

describe('PhoneNotebookComponent', () => {
  let component: PhoneNotebookComponent;
  let fixture: ComponentFixture<PhoneNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
