function displayArtistForm() {
    // gets the artist form 
    var artistForm = document.getElementById("artist-form");

    // get current value of button's display property
    var formDisplaySetting = artistForm.style.display;

    if(formDisplaySetting == "block") {
        // form is visible, hide it
        artistForm.style.display = "none";
    } else {
        // form is hidden, show it
        artistForm.style.display = "block";
    }
}

function addNewArtist() {
    // creates and appends div.artists
    var artistDiv = document.createElement("div");
    artistDiv.setAttribute("class", "artists");
    var artistContainer = document.getElementsByClassName("artist-container")[0];
    artistContainer.appendChild(artistDiv);

    // creates new img element and appends to div.artists
    var img = document.createElement("img");
    artistDiv.appendChild(img);

    // creates div.artist-desc and appends to div.artist
    var artistDescDiv = document.createElement("div");
    artistDescDiv.setAttribute("class", "artist-desc");
    artistDiv.appendChild(artistDescDiv);

    var artistNameSpan = document.createElement("span");
    artistNameSpan.setAttribute("class", "artist-name");
    var artistNameBold = document.createElement("b");
    artistNameBold.appendChild(artistNameSpan);
    artistDescDiv.appendChild(artistNameBold);

    var schoolSpan = document.createElement("span");
    schoolSpan.setAttribute("class", "artist-school");
    artistDescDiv.appendChild(schoolSpan);
    
    console.log(artistContainer);
}