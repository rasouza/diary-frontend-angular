import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Story } from '../classes/story';
import { STORIES } from './story.mock';
 
@Injectable()

export class StoryService {
    private url = 'http://site.rasouza.com.br/api';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    write(story: Story): Promise<Story> {
        return this.http.post(`${this.url}/stories`, JSON.stringify(story), { headers: this.headers }).toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    getStories(): Promise<Story[]> {
        return this.http.get(`${this.url}/stories`).toPromise()
            .then(stories => stories.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}