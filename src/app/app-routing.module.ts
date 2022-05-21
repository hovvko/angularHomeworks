import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', loadChildren: () => import('./modules/users/users.module').then(c => c.UsersModule)},
    {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(c => c.PostsModule)},
    {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(c => c.CommentsModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
