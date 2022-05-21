import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentDetailsRoutingModule} from './comment-details-routing.module';
import {CommentDetailsComponent} from '../../components/comment-details/comment-details.component';


@NgModule({
    declarations: [
        CommentDetailsComponent
    ],
    imports: [
        CommonModule,
        CommentDetailsRoutingModule
    ]
})
export class CommentDetailsModule {
}
