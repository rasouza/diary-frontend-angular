import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GithubService {
    base: string = 'https://api.github.com';
    constructor(private http: Http) {}

    getRepos(user: string): Promise<any> {
        return this.http.get(`${this.base}/users/${user}/repos`).toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}