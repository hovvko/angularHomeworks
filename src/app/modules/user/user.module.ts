import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UsersComponent} from './components';
import {UserService} from './services';
import {UserResolver} from './resolvers';
import {UserCanActivateGuard} from './guards';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule
    ],
    providers: [UserService, UserResolver, UserCanActivateGuard]
})
export class UserModule {
}
