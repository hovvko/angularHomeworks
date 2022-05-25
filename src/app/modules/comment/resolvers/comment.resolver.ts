import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IComment} from '../models';
import {CommentService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment[]> {

    constructor(private commentService: CommentService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
        return this.commentService.getAll()
    }
}
