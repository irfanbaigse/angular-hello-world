import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    CoursesService // creates a single instance of courses service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
