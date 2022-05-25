import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TopMenuComponent} from './main-components/top-menu/top-menu.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
