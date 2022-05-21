import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from '../../components/comments/comments.component';

const routes: Routes = [
    {
        path: '', component: CommentsComponent, children: [
            {
                path: ':id',
                loadChildren: () => import('../../modules/comment-details/comment-details.module').then(c => c.CommentDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentsRoutingModule {
}
