import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../../models';
import {urls} from '../../../../configs';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {

    constructor(private http: HttpClient) {
    }

    getById(id: string): Observable<IUser> {
        return this.http.get<IUser>(`${urls.users}/${id}`)
    }

}
