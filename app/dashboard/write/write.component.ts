import { Component, OnInit } from '@angular/core';

import { Story } from '../../classes/story';
import { StoryService } from '../../services/story.service';

declare var $:any;
declare var moment:any;

@Component({
    selector: 'write-cmp',
    moduleId: module.id,
    templateUrl: 'write.component.html',
    providers: [StoryService]
})

export class WriteComponent implements OnInit {
    story: Story = new Story();
    isOpen = false;

    ngOnInit(){
     }
    constructor(private storyService: StoryService) {}

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
    }

    openDatepicker() {
        this.isOpen = true;
        setTimeout(() => {
            this.isOpen = false;
        }, 1000);
    }
}
