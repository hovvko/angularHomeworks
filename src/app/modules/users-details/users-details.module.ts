import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersDetailsRoutingModule} from './users-details-routing.module';
import {UserService} from '../../services';
import {UserDetailsComponent} from '../../components/user-details/user-details.component';


@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        UsersDetailsRoutingModule
    ],
    providers: [UserService]
})
export class UsersDetailsModule {
}
