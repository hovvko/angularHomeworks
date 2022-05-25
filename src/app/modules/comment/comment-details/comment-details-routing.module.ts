import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentDetailsComponent} from './components';
import {CommentDetailsResolver} from './resolvers';

const routes: Routes = [
    {
        path: '',
        component: CommentDetailsComponent,
        resolve: {comment: CommentDetailsResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentDetailsRoutingModule {
}
