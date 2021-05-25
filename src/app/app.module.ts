import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { SpacePipe } from 'src/app/shared/convert-to-spaces.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
