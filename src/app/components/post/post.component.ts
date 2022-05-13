import {Component, OnInit} from '@angular/core';

import {PostService} from '../../services/post.service';
import {IPost} from '../../models/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts!: IPost[];

    constructor(private postService: PostService) {
    };

    ngOnInit(): void {
        this.postService
            .getPosts()
            .subscribe(response => this.posts = response);
    };

}
