import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './components';
import {UserResolver} from './resolvers';
import {UserCanActivateGuard} from './guards';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        resolve: {users: UserResolver},
        canActivate: [UserCanActivateGuard],
        children: [
            {
                path: ':id',
                loadChildren: () => import('./user-details-modules/user-details.module').then(c => c.UserDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
