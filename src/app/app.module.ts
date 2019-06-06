import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListDirective } from './product-list.directive';
import { ProductListComponent } from './product-list/product-list/product-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListDirective, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
