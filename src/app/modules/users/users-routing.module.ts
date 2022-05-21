import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from '../../components/users/users.component';

const routes: Routes = [
    {
        path: '', component: UsersComponent, children: [
            {
                path: ':id',
                loadChildren: () => import('../../modules/users-details/users-details.module').then(c => c.UsersDetailsModule)
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
