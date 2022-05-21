import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {UsersRoutingModule} from './users-routing.module';
import {UserService} from '../../services';
import {UsersComponent} from '../../components/users/users.component';
import {UserComponent} from '../../components/user/user.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        UserService,
    ]
})
export class UsersModule {
}
