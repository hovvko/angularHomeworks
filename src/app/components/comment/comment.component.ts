import {Component, OnInit} from '@angular/core';

import {IComment} from '../../models/comment';
import {CommentService} from '../../services/comment.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    comments!: IComment[];

    constructor(private commentService: CommentService) {
    };

    ngOnInit(): void {
        this.commentService
            .getComments()
            .subscribe(response => this.comments = response);
    };

}
