import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlUserComponent } from './editl-user.component';

describe('EditlUserComponent', () => {
  let component: EditlUserComponent;
  let fixture: ComponentFixture<EditlUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
