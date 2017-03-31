import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../../services/github.service';

@Component({
    selector: 'settings-cmp',
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [GithubService]
})

export class SettingsComponent implements OnInit{
    repos;
    user;
    logged;

    constructor(private githubService: GithubService, private route: ActivatedRoute) {}
    ngOnInit() {
        this.route.params.subscribe(params => {
            if(params['token'])
                sessionStorage.setItem('token', params['token']);

            if(sessionStorage.getItem('token') !== null) {
                this.logged = sessionStorage.getItem('token');
                this.githubService.getUser()
                    .then(user => this.user = user);
                this.githubService.getRepos()
                    .then(repos => this.repos = repos);
            }

            console.log(sessionStorage.getItem('token'));
        });
    }


}
