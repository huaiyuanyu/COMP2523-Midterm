import { IImportable } from "./interface";
import { Playlist } from "./play";

export class CloudImporter implements IImportable {
    filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    loadPlaylist(): Playlist {
        console.log(`Your Playlist at location ${this.filename} will be loaded.`);
        const playlist = new Playlist("New Playlist")
        playlist.list = ["Man It's a Hot One", "Gangnam Style", "Fireworks"]
        //in this case, you create a fake Playlist to be returned.
        return playlist;
    }
}