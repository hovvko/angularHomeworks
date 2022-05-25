import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserDetailsComponent} from './components';
import {UserDetailsResolver} from './resolvers';

const routes: Routes = [
    {
        path: '', component: UserDetailsComponent,
        resolve: {user: UserDetailsResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule {
}
