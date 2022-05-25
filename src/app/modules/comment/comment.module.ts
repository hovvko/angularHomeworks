import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentComponent, CommentsComponent} from './components';
import {CommentService} from './services';
import {CommentResolver} from './resolvers';
import {CommentCanActivateGuard} from './guards';

@NgModule({
    declarations: [
        CommentsComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        CommentRoutingModule,
        HttpClientModule
    ],
    providers: [CommentService, CommentResolver, CommentCanActivateGuard]
})
export class CommentModule {
}
