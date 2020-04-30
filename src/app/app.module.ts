import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from './search/search.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    { path: 'search', component: SearchComponent }
  ])],
  declarations: [AppComponent, SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
