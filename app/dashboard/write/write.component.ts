import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'write-cmp',
    moduleId: module.id,
    templateUrl: 'write.component.html'
})

export class WriteComponent implements OnInit {
    date: Date = new Date();
    isOpen = false;

    ngOnInit(){ }

    openDatepicker() {
        this.isOpen = true;
        setTimeout(() => {
            this.isOpen = false;
        }, 1000);
    }
}
