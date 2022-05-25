import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IComment} from '../../models';
import {CommentDetailsService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<IComment> {

    constructor(private commentDetailsService: CommentDetailsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
        const {id} = route.params;

        return this.commentDetailsService.getById(id);
    }
}
