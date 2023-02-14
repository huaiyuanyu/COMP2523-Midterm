import { Album } from "./album";

export class Playlist {
    private _name: string;
    private _list: string[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get list(): string[] {
        return this._list;
    }

    set list(list: string[]) {
        this._list = list;
    }

    addAlbum(album: Album) {
        const list = album.tracks;
        list.forEach((song) => {
            this.list.push(song)
        })
    }

}