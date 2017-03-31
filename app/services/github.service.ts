import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GithubService {
    private base: string = 'https://api.github.com';

    constructor(private http: Http) {}

    getRepos(): Promise<any> {
        const headers = new Headers({'Authorization': `token ${sessionStorage.getItem('token')}`});
        return this.http.get(`${this.base}/user/repos`, { headers: headers }).toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getUser(): Promise<any> {
        const headers = new Headers({'Authorization': `token ${sessionStorage.getItem('token')}`});
        return this.http.get(`${this.base}/user`, { headers: headers }).toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}