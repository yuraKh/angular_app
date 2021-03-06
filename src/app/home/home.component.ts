﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {UserService} from "../user/user.service";
import {User} from "../user/user.model";

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        // @ts-ignore
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users; 
        });
    }
    
    onClick(){
        
    }
}