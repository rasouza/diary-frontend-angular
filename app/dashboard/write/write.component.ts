import { Component, OnInit } from '@angular/core';

import { Story } from '../../classes/story';
import { StoryService } from '../../services/story.service';
import { TwitterService } from '../../services/twitter.service';

declare var $:any;
declare var moment:any;

@Component({
    selector: 'write-cmp',
    moduleId: module.id,
    templateUrl: 'write.component.html',
    providers: [StoryService, TwitterService]
})

export class WriteComponent implements OnInit {
    story: Story = new Story();
    isOpen = false;
    tweet = false;

    ngOnInit() {
        if(sessionStorage.getItem('twitter_token') !== null)
            this.tweet = true;
    }
    constructor(private storyService: StoryService, private twitterService: TwitterService) {}

    onSubmit() {
        this.storyService.write(this.story)
            .then(story => {
                $.notify({
                    // title: 'Story',
                    message: `Your story from <strong>${moment(story.date).format('L')}</strong> was successfully written to your diary!`
                }, {
                    type: 'success'
                });
            });
        if (this.tweet)
            this.twitterService.tweet(this.story.title)
                .then(() => {
                    $.notify({
                        // title: 'Story',
                        message: `You just tweeted about your day`
                    }, {
                        type: 'success'
                    });
                });
    }

    openDatepicker() {
        this.isOpen = true;
        setTimeout(() => {
            this.isOpen = false;
        }, 1000);
    }
}
