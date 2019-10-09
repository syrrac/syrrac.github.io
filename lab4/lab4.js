window.onload = function() {
    document.getElementById("artist-form").style.display = "none"; 

    var storedArtists = Array.from(getArtist());

    for(var i = 0; i < storedArtists.length; i++) {
        var artist = storedArtists[i]; 

        renderArtist(artist.name, artist.about, artist.image);
    }
}

function displayArtistForm() {
    // gets the artist form 
    var artistForm = document.getElementById("artist-form");

    if(artistForm.style.display == "block") {
        // form is visible, hide it
        artistForm.style.display = "none";
        clearForm();
    } else {
        // form is hidden, show it
        artistForm.style.display = "block";
    }
}

function getUserInput() {
    var nameInput = document.getElementById("name-input");
    var nameStored = nameInput.value;

    var aboutInput = document.getElementById("about-input");
    var aboutStored = aboutInput.value;

    var imageInput = document.getElementById("image-input");
    var imageStored = imageInput.value;

    if(nameStored === "" || aboutStored === "" || imageStored === "") {
        alert("One or more fields are empty. Please fill out all fields.");
    } else {
        renderArtist(nameStored, aboutStored, imageStored);
        
        setArtist();

        clearForm();
        var artistForm = document.getElementById("artist-form");
        artistForm.style.display = "none";
    }
}

function clearForm() {
    // resets fields
    var nameInput = document.getElementById("name-input");
    var aboutInput = document.getElementById("about-input");
    var imageInput = document.getElementById("image-input");

    nameInput.value = "";
    aboutInput.value = "";
    imageInput.value = "";
}

function renderArtist() {
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

    // creates the artist name and artist school spans and appends to div.artist-desc
    var artistNameSpan = document.createElement("span");
    artistNameSpan.setAttribute("class", "artist-name");
    var artistNameBold = document.createElement("b");
    artistNameBold.appendChild(artistNameSpan);
    artistDescDiv.appendChild(artistNameBold);

    var schoolSpan = document.createElement("span");
    schoolSpan.setAttribute("class", "artist-school");
    artistDescDiv.appendChild(schoolSpan);

    // creates delete button 
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.addEventListener("click", deleteArtist);
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    artistDiv.appendChild(deleteBtn);

    // console.log(artistContainer);

    /****** APPEND USER INPUT TO ARTIST CONTAINER ******/

    // get the input from Name field
    var nameInput = document.getElementById("name-input");
    var nameStored = nameInput.value;
    artistNameSpan.append(nameStored);

    // get input from About field
    var aboutInput = document.getElementById("about-input");
    var aboutStored = aboutInput.value;
    schoolSpan.append(aboutStored);

    // get input from Image URL field
    var imageInput = document.getElementById("image-input");
    var imageStored = imageInput.value;
    img.setAttribute("src", imageStored);

    // clearForm();
    // var artistForm = document.getElementById("artist-form");
    // artistForm.style.display = "none";
}

function setArtist() {
    var nameInput = document.getElementById("name-input");
    var aboutInput = document.getElementById("about-input");
    var imageInput = document.getElementById("image-input");

    const artist = {
        "name": nameInput.value,
        "about": aboutInput.value,
        "image": imageInput.value
    }

    var artistArray = getArtist();
    artistArray.push(artist);
    localStorage.setItem("artist", JSON.stringify(artistArray));
    
}

function getArtist() {
    var artistArray = JSON.parse(localStorage.getItem("artist")); 
    if(!artistArray) {
        artistArray = [];
    }

    return artistArray;
}

function deleteArtist() {
    var thisArtistName = this.previousSibling.firstChild.innerHTML; 
    var thisArtistDiv = this.parentNode; 
    thisArtistDiv.parentNode.removeChild(thisArtistDiv);

    var artistArray = JSON.parse(localStorage.getItem("artist"));

    for(var i = 0; i < artistArray.length; i++) {
        if(artistArray[i].name === thisArtistName) {
            console.log("Removed item: ", artistArray.splice(i, 1));
        }
    }

    // localStorage.setItem("artist", JSON.stringify(artistArray));
    // console.log(localStorage.getItem("artist"));
}