import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Story } from '../classes/story';
 
@Injectable()

export class StoryService {
    constructor(private http: Http) {}

    write(story: Story) {
        this.http.post('http://diary-api.dev/story', JSON.stringify(story)).toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}