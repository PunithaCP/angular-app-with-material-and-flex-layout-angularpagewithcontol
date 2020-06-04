import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  constructor() { }
  // formControls: FormGroup;
  autoCompleteField = new FormControl();
  // slideToggleChecked = new FormControl('true');
  options: string[] = ['One', 'Two', 'Three'];
  slideToggleChecked = true;
  ngOnInit() {
  }

}