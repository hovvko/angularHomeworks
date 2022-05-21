import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostsRoutingModule} from './posts-routing.module';
import {PostService} from '../../services';
import {PostComponent} from '../../components/post/post.component';
import {PostsComponent} from '../../components/posts/posts.component';


@NgModule({
    declarations: [
        PostsComponent,
        PostComponent,
    ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        HttpClientModule
    ],
    providers: [PostService]
})
export class PostsModule {
}
