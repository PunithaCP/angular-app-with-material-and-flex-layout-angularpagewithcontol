import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import value from '*.json';
import {FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  constructor(public focusMonitor: FocusMonitor,
              private _cdr: ChangeDetectorRef,
              private _ngZone: NgZone) {}

  // formControls: FormGroup;
  // slideToggleChecked = new FormControl({value: true});

  @ViewChild('monitored', {static: false}) monitoredEl: ElementRef<HTMLElement>;
  origin = this.formatOrigin(null);

  autoCompleteField = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  slideToggleCheckedVal = true;
  fltDateTo: FormControl;
  
  formControls = new FormGroup({
    slideToggleChecked: new FormControl([{value: this.slideToggleCheckedVal}]),
    // lastName: new FormControl(''),
  });

  // console.log(this.formControls.get('slideToggleChecked').value);
  // slideToggleCheckedVal = (this.formControls.get('slideToggleChecked').value);
  ngOnInit() {
    // console.log(this.formControls.get('slideToggleChecked').value);
    // console.log(this.formControls.controls['slideToggleChecked'].value);
    
  }

  onChange() {
    console.log(this.formControls.get('slideToggleChecked').value);
    this.slideToggleCheckedVal = this.formControls.get('slideToggleChecked').value;
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.monitoredEl)
        .subscribe(origin => this._ngZone.run(() => {
          this.origin = this.formatOrigin(origin);
          this._cdr.markForCheck();
        }));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

}