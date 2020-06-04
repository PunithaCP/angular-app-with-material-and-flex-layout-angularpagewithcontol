import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  constructor() { }

  autoCompleteField = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  ngOnInit() {
  }

}