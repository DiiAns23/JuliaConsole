import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CodeMirrorComponent } from './codemirror.component';

// https://www.npmjs.com/package/ng2-codemirror
import 'codemirror';
import { CodemirrorModule } from 'ng2-codemirror';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    CodemirrorModule 
  ],
  declarations: [ 
    AppComponent, 
    CodeMirrorComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
