import { Album } from "./album";
import { Artist } from "./artist";
import { Song } from "./song";
import { Playlist } from "./play";
import { LocalImporter } from "./localimporter";
import { CloudImporter } from "./cloudimporter";
import { PlaylistImporter } from "./playlistimporter";
import { User } from "./user";


const linkin = new Artist("Linkin Park");
const meteor = new Album("Meteora", linkin.name, 2010);
const breakHabit = new Song("Breaking the Habit");

linkin.addAlbum(meteor);
meteor.addTrack(breakHabit);
console.log(linkin.albums);

const check = new Playlist("wat");
check.addAlbum(meteor);
console.log(check.list);

let local = new PlaylistImporter(
    new LocalImporter("playlist.json")
)

let cloud = new PlaylistImporter(
    new CloudImporter("www.youtube.com")
)

let localPlaylist = local.importPlaylist()
let cloudPlaylist = cloud.importPlaylist()

let user = new User("john123", "password1234")

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log(user.getPlaylists());

user.addAlbum(meteor);
console.log(user.getAlbums());

console.log(user.getSongs());