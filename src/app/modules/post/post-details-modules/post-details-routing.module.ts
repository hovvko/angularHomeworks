import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostDetailsComponent} from './components';
import {PostDetailsResolver} from './resolvers';

const routes: Routes = [
    {
        path: '', component: PostDetailsComponent,
        resolve: {post: PostDetailsResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostDetailsRoutingModule {
}
