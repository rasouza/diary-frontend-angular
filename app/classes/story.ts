export class Story {
    id: number;
    title: string;
    date: Date;
    description: string;

    constructor() {
        this.date = new Date();
    }
}