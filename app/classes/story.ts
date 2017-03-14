export class Story {
    id: number;
    title: string;
    date: Date;
    text: string;

    constructor() {
        this.date = new Date();
    }
}