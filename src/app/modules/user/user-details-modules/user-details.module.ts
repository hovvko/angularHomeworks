import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from './components';
import {UserDetailsService} from './services';
import {UserDetailsResolver} from './resolvers';


@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        UserDetailsRoutingModule
    ],
    providers: [UserDetailsService, UserDetailsResolver]
})
export class UserDetailsModule {
}
