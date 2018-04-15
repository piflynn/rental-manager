import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
