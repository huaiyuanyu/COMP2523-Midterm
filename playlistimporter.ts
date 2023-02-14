import { IImportable } from "./interface";
import { Playlist } from "./play";

export class PlaylistImporter {
    importer: IImportable;

    constructor(importer: IImportable) {
        this.importer = importer;
    }

    importPlaylist(): Playlist {
        const playlist = this.importer.loadPlaylist();
        return playlist;
    }
// A PlaylistImporter takes in its constructor an importer of type IImportable.

// A PlaylistImporter has an importPlaylist method that calls a loadPlaylist
// method from the importer. EVERY IMPORTER must have this method. 
}