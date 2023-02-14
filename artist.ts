import { Album } from "./album";

export class Artist {
    //fields
    name: string;
    albums: Album[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addAlbum(album: Album) {
        this.albums.push(album);
    }
//     Artists have a name
//     Artists have albums

// We can add an album
}