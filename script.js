function printLyrics() {
  var lyricsContainer = document.getElementById('lyricsContainer');
  lyricsContainer.innerHTML = '';

  for (var bottles = 99; bottles > 0; bottles--) {
    var currentLyric = bottles + " bottle" + (bottles !== 1 ? "s" : "") + " of beer on the wall, " +
                        bottles + " bottle" + (bottles !== 1 ? "s" : "") + " of beer.\n" +
                        "Take one down and pass it around, " +
                        (bottles - 1 > 0 ? (bottles - 1) : "no more") + " bottle" + 
                        ((bottles - 1) !== 1 ? "s" : "") + " of beer on the wall.\n\n";

    lyricsContainer.innerHTML += currentLyric;
  }

  
  lyricsContainer.innerHTML += "No more bottles of beer on the wall, no more bottles of beer.\n" +
                              "Go to the store and buy some more, 99 bottles of beer on the wall.";
}