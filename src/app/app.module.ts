import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServicePostFiles } from './services/service.postfiles';
import { TestingfilesComponent } from './components/testingfiles/testingfiles.component';

@NgModule({
  declarations: [
    AppComponent,TestingfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServicePostFiles],
  bootstrap: [AppComponent]
})
export class AppModule { }
