import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IPost} from '../../models';
import {PostDetailsService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<IPost> {

    constructor(private postDetailsService: PostDetailsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
        const {id} = route.params;

        return this.postDetailsService.getById(id);
    }
}
