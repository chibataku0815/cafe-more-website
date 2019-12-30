import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
