import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', loadChildren: () => import('./modules/user/user.module').then(c => c.UserModule)},
    {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(c => c.PostModule)},
    {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(c => c.CommentModule)}
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
