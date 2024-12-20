import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Editor } from 'ngx-editor';
import { FormDialogComponent } from './form-dialog.component';

describe('FormDialogComponent', () => {
  let component: FormDialogComponent;
  let fixture: ComponentFixture<FormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDialogComponent],
    });
    fixture = TestBed.createComponent(FormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
