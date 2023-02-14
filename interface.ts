import { Playlist } from "./play";

export interface IImportable {
    filename: string;

    loadPlaylist(): Playlist;
    //will need to change that up.
}