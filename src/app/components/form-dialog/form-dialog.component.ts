import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-body',
  templateUrl: './form-dialog.html',
  styleUrls: ['./form-dialog.scss'],
})
export class FormDialogComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
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
    subtitle: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    checked: new FormControl(false),
    publisher_job: new FormControl('', Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.data) {
      this.myform.patchValue({
        title: this.data.title,
        subtitle: this.data.subtitle,
        body: this.data.body,
        type: this.data.reportType,
        name: this.data.publisherName,
        checked: this.data.isPrimary,
        publisher_job: this.data.publisherJob,
      });
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
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
