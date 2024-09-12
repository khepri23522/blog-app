import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

interface cargo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
 
 
  
})
export class BodyComponent {
  cargo: cargo[] = [
    {value: '-0', viewValue: 'estudiante'},
    {value: '-1', viewValue: 'profesores'},
    {value: '-2', viewValue: 'externo'},
  ];
 myform=new FormGroup({
  title:new FormControl('',Validators.required,),
  droptitle:new FormControl('',Validators.required),
  body:new FormControl('',Validators.required),
  type:new FormControl('',Validators.required),
  name:new FormControl('',Validators.required),
 });
 
 
 submitted = true;
 
//  cargo
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}

