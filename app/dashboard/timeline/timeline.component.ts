import { Component, OnInit } from '@angular/core';

import { Story } from '../../classes/story';
import { StoryService } from '../../services/story.service';

@Component({
    selector: 'timeline-cmp',
    moduleId: module.id,
    templateUrl: 'timeline.component.html',
    providers: [StoryService]
})

export class TimelineComponent implements OnInit{
    stories: Story[];

    constructor(private storyService: StoryService) {}

    ngOnInit() {
        this.getStories();
    }

    getStories(): void {
        this.storyService.getStories()
            .then(stories => this.stories = stories);
    }
}
