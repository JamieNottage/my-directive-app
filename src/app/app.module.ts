import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextupdateComponent } from 'src/textupdate/textupdate-component';

@NgModule({
  declarations: [AppComponent, TextupdateComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
