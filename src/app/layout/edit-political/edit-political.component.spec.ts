import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoliticalComponent } from './edit-political.component';

describe('EditPoliticalComponent', () => {
  let component: EditPoliticalComponent;
  let fixture: ComponentFixture<EditPoliticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoliticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoliticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
