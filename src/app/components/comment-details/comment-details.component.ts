import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IComment} from '../../models';
import {CommentService} from '../../services';

@Component({
    selector: 'app-comment-details',
    templateUrl: './comment-details.component.html',
    styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

    comment: IComment;

    constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .subscribe(({id}) => {
                this.commentService
                    .getById(id)
                    .subscribe(response => this.comment = response);
            })
    }
}
