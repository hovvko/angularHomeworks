import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from './components';
import {CommentResolver} from './resolvers';
import {CommentCanActivateGuard} from './guards';

const routes: Routes = [
    {
        path: '', component: CommentsComponent,
        resolve: {comments: CommentResolver},
        canActivate: [CommentCanActivateGuard],
        children:
            [
                {
                    path: ':id',
                    loadChildren: () => import('./comment-details/comment-details.module').then(c => c.CommentDetailsModule)
                }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentRoutingModule {
}
