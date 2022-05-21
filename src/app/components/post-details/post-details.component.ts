import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPost} from '../../models';
import {PostService} from '../../services';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

    post: IPost;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({id}) => {
            const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPost;

            if (state) {
                this.post = state;
            } else {
                this.postService
                    .getById(id)
                    .subscribe(response => this.post = response);
            }
        })
    }
}
