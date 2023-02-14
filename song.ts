export class Song {
    private _title: string;

    constructor(title: string) {
        this.title = title;
    }

    get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

}