import { IImportable } from "./interface";
import { Playlist } from "./play";

const fs = require('fs');

export class LocalImporter implements IImportable {

    filename: string;

    constructor(filename: string) {
        this.filename = filename
    }

    loadPlaylist(): Playlist {
        console.log(`Your Playlist at location ${this.filename} will be loaded.`);
        const playlist = new Playlist("New Playlist")
        let json: string;

        fs.readFile(this.filename, "utf-8", (err: string, data: string) => {
            if(err) {
                console.log(err);
            } else {
                json = data;
                const obj: object = JSON.parse(json);

                const arrOfAlbums = obj["albums"];

                const list: string[] = [];

                arrOfAlbums.forEach((album) => {
                    const arr = album["tracks"];
                    arr.forEach((track) => {
                        list.push(track);
                    })
                })
                playlist.list = list;
                
            }
        })
        //doesn't work out so well right now, because the async readFile doesn't read and alter the playlist.list before playlist is returned.

        return playlist;
    }

}
