import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

interface cargo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './form-dialog.html',
  styleUrls: ['./form-dialog.scss'],
})
export class FormDialogComponent {
  constructor(private diallogRef: MatDialogRef<FormDialogComponent>) {}

  cargo: cargo[] = [
    { value: '0', viewValue: 'estudiante' },
    { value: '1', viewValue: 'profesores' },
    { value: '2', viewValue: 'externo' },
  ];
  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    droptitle: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    checked: new FormControl(false, Validators.required),
  });
  submitted = true;

  saveForm(): void {
    if (this.myform.valid) {
      this.diallogRef.close(this.myform.value);
    }
  }
}
