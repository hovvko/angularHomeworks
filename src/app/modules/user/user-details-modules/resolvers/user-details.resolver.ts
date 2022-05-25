import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IUser} from '../../models';
import {UserDetailsService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {

    constructor(private userDetailsService: UserDetailsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
        const {id} = route.params;

        return this.userDetailsService.getById(id);
    }
}
