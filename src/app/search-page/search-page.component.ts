import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AdvanceSearchPageComponent } from './advance-search-page/advance-search-page.component';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DatePipe } from "@angular/common";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

interface View {
  value: string;
  name: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  basicSearchValidation: FormGroup;
  fltDateTo: FormControl;
  fromDate: Date;
  toDate: Date;
  pipe = new DatePipe('en-US');
  constructor(private formBuilder: FormBuilder) { }
  // constructor() { }
  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

buViews: View[] = [
     {value: "AA", name: "AA"},
      {value: "BB2", name: "BB"}
  ];

  // buViews:Array<Object> = [
  //     {value: 0, name: "AA"},
  //     {value: 1, name: "BB"}
  // ];
  ngOnInit() {
    this.basicSearchValidation = this.formBuilder.group({
      buView: ['', [Validators.required]],
      fltDateFrom: ['', [Validators.required
      // , Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')
      ]],
      fltDateTo: ['', [Validators.required,
      RxwebValidators.minDate({fieldName:"fltDateFrom"})
      // , Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')
      ]]
    }
    ,{
      validator: this.passwordValidator
    }
    );
  }

  gotoAdvanceSearch() {
      // this.router.navigate(['./advance-search-page/advance-search-page.component']);
    }

    validateSubmit(){
    //   alert("");
    //   this.basicSearchValidation=new FormGroup({
    //   fltDatrFrom: new FormControl("",Validators.compose([
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.pattern('[\\w\\-\\s\\/]+')
    //   ]))
    //   // lastname:new FormControl("",this.textValidator),
    //   // languages:new FormControl("")
       
    // });

      this.basicSearchValidation = this.formBuilder.group({
        buView: ['', [Validators.required]],
        fltDateFrom: ['', [Validators.required
        // , Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')
        ]],
        fltDateTo: ['', [Validators.required
        // , Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')
        ]]
      }
    , {
      validator: this.passwordValidator
    }
      );
    }

    passwordValidator(form: FormGroup) {
      //  alert(form.get('fltDateFrom').value === form.get('fltDateTo').value)
       
      if(form.get('fltDateFrom').value!=null && form.get('fltDateFrom').value!="" && form.get('fltDateTo').value!=null && form.get('fltDateTo').value!=""){

        // this.fromDate = new Date(form.get('fltDateFrom').value);
        //   alert(this.fromDate);

         const condition = form.get('fltDateFrom').value === form.get ('fltDateTo').value;
          // alert(form.get('fltDateFrom').value == form.get ('fltDateTo').value);
          // fromDate = new Date()
          
          // this.pipe.transform(new Date(form.get('fltDateFrom').value), 'dd/mm/yyyy');
          // alert(==this.pipe.transform(new Date(form.get('fltDateTo').value), 'dd/mm/yyyy'));
         return condition ? { datesEqual: true} : null;
      }
        return null;
      
  }

}