import { Album } from "./album";
import { Playlist } from "./play";

export class User {
    //fields
    private _username: string;
    private _password: string;
    playlists: Playlist[] = []; //check later
    albums: Album[] = []; //check later

    constructor (username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }
    
    addPlaylist(playlist: Playlist) {
        this.playlists.push(playlist);
    }

    addAlbum(album: Album) {
        this.albums.push(album);
    }

    getSongs():string[] {
        const songs: string[] = [];

        this.albums.forEach((album) => {
            album.tracks.forEach((song) => {
                songs.push(song);
            })
        })

        return songs;
    }

    getAlbums(): Album[] {
        return this.albums;
    }

    getPlaylists(): Playlist[] {
        return this.playlists;
    }

}