import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './components';
import {PostResolver} from './resolvers';
import {PostCanDeactivateGuard} from './guards';

const routes: Routes = [
    {
        path: '', component: PostsComponent,
        resolve: {posts: PostResolver},
        canDeactivate: [PostCanDeactivateGuard],
        children:
            [
                {
                    path: ':id',
                    loadChildren: () => import('./post-details-modules/post-details.module').then(c => c.PostDetailsModule)
                }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {
}
