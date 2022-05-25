import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComment} from '../../models';
import {urls} from '../../../../configs';

@Injectable({
    providedIn: 'root'
})
export class CommentDetailsService {

    constructor(private http: HttpClient) {
    }

    getById(id: string): Observable<IComment> {
        return this.http.get<IComment>(`${urls.comments}/${id}`)
    }
}
