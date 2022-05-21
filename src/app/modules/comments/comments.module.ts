import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentService} from '../../services';
import {CommentComponent} from '../../components/comment/comment.component';
import {CommentsComponent} from '../../components/comments/comments.component';

@NgModule({
    declarations: [
        CommentsComponent,
        CommentComponent,
    ],
    imports: [
        CommonModule,
        CommentsRoutingModule,
        HttpClientModule
    ],
    providers: [CommentService]
})
export class CommentsModule {
}
