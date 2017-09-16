import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {AddressPage} from "../address/address";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

    profilePage=HomePage;
    addressPage=AddressPage

}
