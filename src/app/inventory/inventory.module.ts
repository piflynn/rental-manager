import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule, routingComponents } from './inventory.routing';

@NgModule({
	imports: [
		CommonModule,
		InventoryRoutingModule
	],
	declarations: [routingComponents]
})
export class InventoryModule { }
