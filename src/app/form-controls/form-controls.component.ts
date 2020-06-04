import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import value from '*.json';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  constructor() { }

  // formControls: FormGroup;
  // slideToggleChecked = new FormControl({value: true});
  autoCompleteField = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  // slideToggleCheckedVal;
  fltDateTo: FormControl;
  
  formControls = new FormGroup({
    slideToggleChecked: new FormControl([{value: true}]),
    // lastName: new FormControl(''),
  });

  // console.log(this.formControls.get('slideToggleChecked').value);
  slideToggleCheckedVal = (this.formControls.get('slideToggleChecked').value);
  ngOnInit() {
    console.log(this.formControls.value.slideToggleChecked);
  }

}