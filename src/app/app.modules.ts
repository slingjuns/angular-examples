import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {CourseComponent} from "./components/course/course.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";
import {HttpClientModule} from "@angular/common/http";
import { TruncatePipe } from './pipes/truncate.pipe';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
