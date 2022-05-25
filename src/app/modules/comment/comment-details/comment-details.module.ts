import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CommentDetailsRoutingModule} from './comment-details-routing.module';
import {CommentDetailsService} from './services';
import {CommentDetailsComponent} from './components';
import {CommentDetailsResolver} from './resolvers';

@NgModule({
    declarations: [
        CommentDetailsComponent
    ],
    imports: [
        CommonModule,
        CommentDetailsRoutingModule,
        HttpClientModule
    ],
    providers: [CommentDetailsService, CommentDetailsResolver]
})
export class CommentDetailsModule {
}
