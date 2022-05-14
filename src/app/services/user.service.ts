import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../models';
import {urls} from '../configs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<IUser[]> {
        return this.http
            .get<IUser[]>(urls.users)
    }

}
