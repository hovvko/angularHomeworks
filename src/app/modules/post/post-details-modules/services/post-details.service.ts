import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IPost} from '../../models';
import {urls} from '../../../../configs';

@Injectable({
    providedIn: 'root'
})
export class PostDetailsService {

    constructor(private http: HttpClient) {
    }

    getById(id: string): Observable<IPost> {
        return this.http
            .get<IPost>(`${urls.posts}/${id}`);
    }
}
