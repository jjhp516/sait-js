var submitButton = document.getElementById('submitButton');

var invalid = document.getElementById('invalid');
var errorArtist = document.getElementById('errorArtist');
var errorTitle = document.getElementById('errorTitle');
var errorLyrics = document.getElementById('errorLyrics');



submitButton.addEventListener('click',function(event) {
    event.preventDefault();

    var artist = document.songSearch.artist.value;
    var title = document.songSearch.title.value;

    $(errorArtist).css('display','none');
    $(errorTitle).css('display','none');
    $(errorNull).css('display','none');
    $(errorHeader).css('display','none');

    if(!artist) {
        $(errorArtist).css('display','inline');
    }

    if(!title) {
        $(errorTitle).css('display','inline');
    } 
    
    var hostUrl = 'https://api.lyrics.ovh/v1';
    var songUrl = hostUrl + '/' + artist + '/' + title;
    var songHeader = document.getElementById('songHeader');
    var songLyrics = document.getElementById('songLyrics')

    function fetchLyrics(url) {
        fetch(url)
        .then(function(response) {
            return response.json();
        }) 
        .then(function(data) {
            if(!data.lyrics) {
                $(errorNull).css('display','inline');
                $(errorHeader).css('display','inline').css('textTransform','uppercase');
                songHeader.innerHTML = artist + " - " + title;
            } else {
            songHeader.innerHTML = artist + " - " + title;
            songLyrics.innerHTML = data.lyrics;
            }
        })
    }
        
    fetchLyrics(songUrl);
})

