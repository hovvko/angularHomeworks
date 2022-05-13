import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';
import {IUser} from "../../models/user";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    users!: IUser[];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService
            .getUsers()
            .subscribe(response => this.users = response)
    }

}
