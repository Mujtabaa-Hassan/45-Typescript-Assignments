interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = { artist, title };
  if (tracks) {
      album.tracks = tracks;
  }
  return album;
}

console.log(make_album("Talha Anjum", "The First Album"));
console.log(make_album("Talha Yunus", "The Second Album"));
console.log(make_album("Asim Azhar", "The Third Album", 12));
