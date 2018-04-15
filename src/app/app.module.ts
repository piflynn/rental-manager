import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
