import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TwitterService {
    private base: string = 'http://diary-api.dev';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getUser(): Promise<any> {
        const auth = {
            'token': sessionStorage.getItem('twitter_token'),
            'token_secret': sessionStorage.getItem('twitter_token_secret')
        }
        return this.http.post(`${this.base}/api/twitter/user`, JSON.stringify(auth), { headers: this.headers }).toPromise()
            .then(res => res.json())
            .then(res => {
                // Tratamento de imagem
                const extension = res.profile_image_url.slice(-4);
                res.profile_image_url = res.profile_image_url.slice(0,-10) + 'bigger' + extension;
                return res;
            })
            .catch(this.handleError);
    }

    tweet(title: string): Promise<any> {
        const data = {
            'token': sessionStorage.getItem('twitter_token'),
            'token_secret': sessionStorage.getItem('twitter_token_secret'),
            'tweet': `${title} #100DaysOfCode`
        }
        return this.http.post(`${this.base}/api/twitter/status`, JSON.stringify(data), { headers: this.headers }).toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}