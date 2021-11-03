import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,

  ],

  imports: [
    BrowserModule, 
    FormsModule,
    
  ],

  providers: [],

  bootstrap: [AppComponent,
]
  
})
export class AppModule { }
