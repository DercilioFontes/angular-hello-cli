import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { CoffeeDirective } from './coffee.directive';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    CoffeeDirective,
    ProductComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
