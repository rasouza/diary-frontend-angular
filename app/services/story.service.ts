import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Story } from '../classes/story';
import { STORIES } from './story.mock';
 
@Injectable()

export class StoryService {
    constructor(private http: Http) {}

    write(story: Story): Promise<Story> {
        const url = 'http://diary-api.dev/story';
        return this.http.post(url, JSON.stringify(story)).toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    getStories(): Promise<Story[]> {
        return Promise.resolve(STORIES);
        // const url = 'http://diary-api.dev/story';
        // return this.http.get(url).toPromise()
        //     .then(stories => stories.json())
        //     .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}