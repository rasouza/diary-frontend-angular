import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

declare var $:any;

@Component({
    selector: 'settings-cmp',
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    providers: [GithubService]
})

export class SettingsComponent implements OnInit{
    repos;

    constructor(private githubService: GithubService) {}
    ngOnInit() {
        this.githubService.getRepos('rasouza')
            .then(repos => this.repos = repos);
    }
}
