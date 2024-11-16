import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-body',
  templateUrl: './form-dialog.html',
  styleUrls: ['./form-dialog.scss'],
})
export class FormDialogComponent {
  cargos: string[] = [
    'estudiante',
    'profesores',
    'externo',
    'admin',
    'editor',
    'redactor',
    'moderador',
    'visitante',
  ];

  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    droptitle: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    checked: new FormControl(false, Validators.required),
    publisher_job: new FormControl('', Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.myform.patchValue({
        title: this.data.title,
        droptitle: this.data.subtitle,
        body: this.data.body,
        type: this.data.reportType,
        name: this.data.publisherName,
        checked: this.data.isPrimary,
        publisher_job: this.data.publisherJob,
      });
    }
  }

  saveForm(): void {
    if (this.myform.valid) {
      this.dialogRef.close(this.myform.value);
    } else {
      console.warn('Formulario inválido:', this.myform.errors);
    }
  }

  cancelForm(): void {
    this.dialogRef.close();
  }
}
