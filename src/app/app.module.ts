import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextupdateComponent } from './components/textupdate/textupdate-component';
import { CountriesComponent } from './components/countries/countries.component';
import { CardComponent } from './components/card/card.component';
import { TestifComponent } from './components/testif/testif.component';
import { CourseComponent } from './components/course/course.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { TestngforComponent } from './components/testngfor/testngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CountriesComponent,
    TextupdateComponent,
    TestifComponent,
    CourseComponent,
    EmployeeComponent,
    SummaryPipe,
    TestngforComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
