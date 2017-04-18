import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../../services/github.service';
import { TwitterService } from '../../services/twitter.service';
import { env } from "../../env/env.js";

@Component({
    selector: 'settings-cmp',
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [GithubService, TwitterService]
})

export class SettingsComponent implements OnInit{
    repos;
    storedRepos;
    user;
    logged;
    twitter_logged;
    twitter_user;

    constructor(
        private githubService: GithubService,
        private twitterService: TwitterService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.storeTokens();
    }

    storeTokens(): void {
        this.route.params.subscribe(params => {
            for(let k in params)
                sessionStorage.setItem(k, params[k]);
            this.handleLogin();
        });
    }

    handleLogin(): void {
        const github_token = sessionStorage.getItem('token');
        const twitter_token = sessionStorage.getItem('twitter_token');
        const twitter_token_secret = sessionStorage.getItem('twitter_token_secret');

        if(github_token !== null) this.handleGithub();
        if(twitter_token !== null) this.handleTwitter();
    }

    handleGithub(): void {
        this.logged = sessionStorage.getItem('token');
        this.githubService.getUser()
            .then(user => this.user = user)
            .then(() => this.githubService.getStoredRepos(this.user.login))
            .then(repos => this.storedRepos = repos);
        this.githubService.getRepos().then(repos => this.repos = repos);
    }

    handleTwitter(): void {
        this.twitter_logged = true;
        this.twitterService.getUser().then(user => this.twitter_user = user);
    }

    toggleRepo(repo) {
        this.githubService.saveRepo(repo.name);
    }
}
