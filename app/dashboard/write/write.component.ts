import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'write-cmp',
    moduleId: module.id,
    templateUrl: 'write.component.html'
})

export class WriteComponent implements OnInit {
    today: Date = new Date();
    ngOnInit(){ }
}
