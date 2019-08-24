import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { CoffeeDirective } from './coffee.directive';
import { ProductComponent } from './product/product.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    CoffeeDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
