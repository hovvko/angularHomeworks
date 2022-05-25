import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostRoutingModule} from './post-routing.module';
import {PostService} from './services';
import {PostComponent, PostsComponent} from './components';
import {PostResolver} from './resolvers';
import {PostCanDeactivateGuard} from './guards';

@NgModule({
    declarations: [
        PostsComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        PostRoutingModule,
        HttpClientModule
    ],
    providers: [PostService, PostResolver, PostCanDeactivateGuard]
})
export class PostModule {
}
