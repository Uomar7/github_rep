import { Injectable } from '@angular/core';
import { environment } from  '../environments/environment';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';

@Injectable()
export class UserService {
    username: string;

    constructor(private http: HttpClient) {
        // console.log('Github Service Ready...');
        this.username = 'Uomar7';

    }
    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username);

    }
    getRepos() {
        return this.http.get(' https://api.github.com/users/' + this.username + '/repos');
    }
    updateUser(username: string) {
        this.username = username;
    }
}
