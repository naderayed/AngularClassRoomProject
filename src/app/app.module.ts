import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({ // meta data
  declarations: [ // list of component 
    AppComponent,
    TestComponent
  ],
  imports: [// 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],// services
  bootstrap: [AppComponent] // first component runnig up ( at starting)
})
export class AppModule { }
