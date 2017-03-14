import { Component, OnInit } from '@angular/core';

import { Story } from '../../classes/story';
import { StoryService } from '../../services/story.service';

@Component({
    selector: 'write-cmp',
    moduleId: module.id,
    templateUrl: 'write.component.html',
    providers: [StoryService]
})

export class WriteComponent implements OnInit {
    story: Story = new Story();
    isOpen = false;

    ngOnInit(){ }
    constructor(private storyService: StoryService) {}

    onSubmit() { this.storyService.write(this.story); }

    openDatepicker() {
        this.isOpen = true;
        setTimeout(() => {
            this.isOpen = false;
        }, 1000);
    }
}
