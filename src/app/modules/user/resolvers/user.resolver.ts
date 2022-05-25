import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IUser} from '../models';
import {UserService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<IUser[]> {
    constructor(private userService: UserService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
        return this.userService.getAll()
    }
}
