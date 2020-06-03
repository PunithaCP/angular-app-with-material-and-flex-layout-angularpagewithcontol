import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from './search/search.component';
import { RouterModule } from "@angular/router";
import { AdvanceSearchPageComponent } from './advance-search-page/advance-search-page.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'search', component: SearchComponent }
  ])],
  declarations: [AppComponent, SearchComponent, AdvanceSearchPageComponent, DatePickerComponent, TestComponent, Test1Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
