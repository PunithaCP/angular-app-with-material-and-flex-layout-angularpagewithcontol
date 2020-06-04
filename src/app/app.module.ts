import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatIconRegistry } from '@angular/material';


// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule,MatCheckboxModule,MatSelectModule, MatInputModule, MatIconModule, MatSnackBarModule, MatSidenavModule, MatProgressBarModule, MatListModule, MatTooltipModule,MatAutocompleteModule,MatMenuModule } from '@angular/material';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { SearchPageComponent } from './search-page/search-page.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AdvanceSearchPageComponent } from './advance-search-page/advance-search-page.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { FormControlsComponent } from './form-controls/form-controls.component';

@NgModule({
  imports: [BrowserModule, FormsModule,MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSelectModule, MatInputModule,BrowserAnimationsModule,MatIconModule, MatSnackBarModule, ReactiveFormsModule, ReactiveFormsModule, MatSidenavModule, MatProgressBarModule, MatListModule, MatTooltipModule,
  MatAutocompleteModule, MatMenuModule,
  RouterModule.forRoot([
      { path: '', component: SearchPageComponent },
      { path: 'advanceSearch', component: AdvanceSearchPageComponent},
      { path: 'formControls', component: FormControlsComponent},
      { path: 'search', component: SearchPageComponent}
    ])],
  declarations: [AppComponent, SearchPageComponent, DatePickerComponent, AdvanceSearchPageComponent, SearchComponent, TestComponent, Test1Component, FormControlsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
