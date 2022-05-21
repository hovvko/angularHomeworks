import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from '../../components/posts/posts.component';

const routes: Routes = [
    {
        path: '', component: PostsComponent, children: [
            {
                path: ':id',
                loadChildren: () => import('../../modules/post-details/post-details.module').then(c => c.PostDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {
}
