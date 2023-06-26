import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GhanshamComponent } from './components/ghansham/ghansham.component';
import { SecondComponent } from './components/second/second.component';
import { GhanshamComponent } from './components/ghansham/ghansham.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentCountComponent } from './components/student-count/student-count.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,GhanshamComponent, StudentDetailsComponent, StudentCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,GhanshamComponent]
})
export class AppModule { }
