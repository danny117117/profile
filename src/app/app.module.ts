import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {RequiredFieldComponent} from "../components/required-field/required-field";
import {TabsPage} from "../pages/tabs/tabs";
import {AddressPage} from "../pages/address/address";
import {Sim} from "@ionic-native/sim";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RequiredFieldComponent,
        TabsPage,
        AddressPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: true })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage,
        AddressPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Sim
    ]
})
export class AppModule {
}
