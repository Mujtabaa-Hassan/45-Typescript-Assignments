"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Talha Anjum", "The First Album"));
console.log(make_album("Talha Yunus", "The Second Album"));
console.log(make_album("Asim Azhar", "The Third Album", 12));
