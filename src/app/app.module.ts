import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from './search/search.component';
import { RouterModule } from "@angular/router";
import { AdvanceSearchPageComponent } from './advance-search-page/advance-search-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'search', component: SearchComponent }
  ])],
  declarations: [AppComponent, SearchComponent, AdvanceSearchPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
