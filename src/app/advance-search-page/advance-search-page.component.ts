import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-search-page',
  templateUrl: './advance-search-page.component.html',
  styleUrls: ['./advance-search-page.component.css']
})
export class AdvanceSearchPageComponent implements OnInit {
  advanceSearchValidation: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.advanceSearchValidation = this.formBuilder.group({
      fltNo: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3}[0-9]{4}[0-9]?[a-zA-Z]{2}')]],
      awb: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]+')]],
      shc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[a-zA-Z]+')]],
      uldOrBt: [''],
      moduleName: [''],
      carrier: [''],
      carrierGroups: [''],
    });
  }

  modules:Array<Object> = [
      {value: 1, name: "M1"},
      {value: 2, name: "M2"}
  ];

  carriers:Array<Object> = [
      {value: 1, name: "CX"},
      {value: 2, name: "SQ"}
  ];

  carrierGroups:Array<Object> = [
      {value: 1, name: "CX"},
      {value: 2, name: "SQ"}
  ];

    gotoSearch() {
      
        this.router.navigateByUrl('/search');
    }

    // validateSubmit(){
    //   this.advanceSearchValidation = this.formBuilder.group({
    //   fltNo: ['', [Validators.required]],
    //   awb: ['', [Validators.required]],
    //   shc: ['', [Validators.required]],
    //   uldOrBt: ['', [Validators.required]],
    //   moduleName: ['', [Validators.required]],
    //   carrier: ['', [Validators.required]],
    //   carrierGroups: ['', [Validators.required]],
    // });
    // }
}