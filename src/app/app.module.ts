import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AboutComponent } from './about/about.component';
import { ScrollIconComponent } from './scroll-icon/scroll-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FormComponent,
    AboutComponent,
    ScrollIconComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
