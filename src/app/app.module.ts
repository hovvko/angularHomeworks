import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {
    CommentComponent,
    CommentsComponent,
    PostComponent, PostDetailsComponent,
    PostsComponent,
    TopMenuComponent,
    UserComponent,
    UserDetailsComponent,
    UsersComponent
} from './components';
import {HttpClientModule} from '@angular/common/http';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        PostsComponent,
        PostComponent,
        CommentsComponent,
        CommentComponent,
        TopMenuComponent,
        UserDetailsComponent,
        PostDetailsComponent,
        CommentDetailsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '', component: TopMenuComponent, children: [
                    {path: '', redirectTo: 'users', pathMatch: 'full'},
                    {
                        path: 'users', component: UsersComponent, children: [
                            {path: ':id', component: UserDetailsComponent}
                        ]
                    },
                    {
                        path: 'posts', component: PostsComponent, children: [
                            {path: ':id', component: PostDetailsComponent}
                        ]
                    },
                    {
                        path: 'comments', component: CommentsComponent, children: [
                            {path: ':id', component: CommentDetailsComponent}
                        ]
                    }
                ]
            }
        ]),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
