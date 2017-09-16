import { NgModule } from '@angular/core';
import { RequiredFieldComponent } from './required-field/required-field';
import { AddressComponent } from './address/address';
@NgModule({
	declarations: [RequiredFieldComponent,
    AddressComponent],
	imports: [],
	exports: [RequiredFieldComponent,
    AddressComponent]
})
export class ComponentsModule {}
