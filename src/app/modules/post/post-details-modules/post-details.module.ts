import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostDetailsRoutingModule} from './post-details-routing.module';
import {PostDetailsComponent} from './components';
import {PostDetailsService} from './services';
import {PostDetailsResolver} from './resolvers';

@NgModule({
    declarations: [
        PostDetailsComponent
    ],
    imports: [
        CommonModule,
        PostDetailsRoutingModule,
        HttpClientModule
    ],
    providers: [PostDetailsService, PostDetailsResolver]
})
export class PostDetailsModule {
}
