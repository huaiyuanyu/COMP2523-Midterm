import { Song } from "./song";

export class Album {
    private _title: string;
    artist: string;
    year: number;
    tracks: string[] = [];

    constructor(title: string, artist: string, year: number) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    addTrack(song: Song) {
        this.tracks.push(song.title);
    }
    // Albums have a title -> needs getter and setter
    // Albums have an Artist they belong to
    // Albums have a year they were released
    // Albums have tracks (songs)

    // We can add a track to an album
}