function displayArtistForm() {
    console.log("Add artist button clicked");
    // gets the artist form 
    var artistForm = document.getElementById("artist-form");

    // get current value of button's display property
    var formDisplaySetting = artistForm.style.display;

    if(formDisplaySetting == "block") {
        // form is visible, hide it
        artistForm.style.display = "none";
        console.log("Form is visible and going into hiding!");
        console.log("***************");
        // clearForm();
    } else {
        console.log("Form hiding and going into visible, clearing previous text");
        // clearForm();
        // form is hidden, show it
        artistForm.style.display = "block";
        console.log("***************");
    }
}

// function checkIfEmpty() {
//     var nameInput = document.getElementById("name-input");
//     var nameStored = nameInput.value;

//     var aboutInput = document.getElementById("about-input");
//     var aboutStored = aboutInput.value;

//     var imageInput = document.getElementById("image-input");
//     var imageStored = imageInput.value;

//     if(nameStored === "" || aboutStored === "" || imageStored === "") {
//         alert("One or more fields are empty. Please fill out all fields.");
//     } else {
//         console.log("Field all filled. Going to create the artist HTML");
//         createArtistHTML();
//         console.log("***************");
//     }
// }

// function clearForm() {
//     // hide artist form
//     var artistForm = document.getElementById("artist-form");
//     artistForm.style.display = "none";

//     // resets fields
//     var nameInput = document.getElementById("name-input");
//     var aboutInput = document.getElementById("about-input");
//     var imageInput = document.getElementById("image-input");

//     nameInput.value = "";
//     aboutInput.value = "";
//     imageInput.value = "";
//     console.log("form cleared and hidden");
// }

// function createArtistHTML() {
//     console.log("Creating HTML...");
//     // creates and appends div.artists
//     var artistDiv = document.createElement("div");
//     artistDiv.setAttribute("class", "artists");
//     var artistContainer = document.getElementsByClassName("artist-container")[0];
//     artistContainer.appendChild(artistDiv);

//     // creates new img element and appends to div.artists
//     var img = document.createElement("img");
//     artistDiv.appendChild(img);

//     // creates div.artist-desc and appends to div.artist
//     var artistDescDiv = document.createElement("div");
//     artistDescDiv.setAttribute("class", "artist-desc");
//     artistDiv.appendChild(artistDescDiv);

//     // creates the artist name and artist school spans and appends to div.artist-desc
//     var artistNameSpan = document.createElement("span");
//     artistNameSpan.setAttribute("class", "artist-name");
//     var artistNameBold = document.createElement("b");
//     artistNameBold.appendChild(artistNameSpan);
//     artistDescDiv.appendChild(artistNameBold);

//     var schoolSpan = document.createElement("span");
//     schoolSpan.setAttribute("class", "artist-school");
//     artistDescDiv.appendChild(schoolSpan);

//     // creates delete button 
//     var deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class", "delete-btn");
//     deleteBtn.setAttribute("type", "button");
//     deleteBtn.setAttribute("onclick", "");
//     var deleteText = document.createTextNode("Delete");
//     deleteBtn.appendChild(deleteText);
//     artistDiv.appendChild(deleteBtn);
    
//     // console.log(artistContainer);
//     console.log("HTML created. Appending user input.");

//     addNewArtist();
//     console.log("***************");
// }

// function addNewArtist() {
    
//     // get the input from Name field
//     var nameInput = document.getElementById("name-input");
//     var nameStored = nameInput.value;
//     // console.log(nameStored);
//     var artistNameSpan = document.getElementsByClassName("artist-name")[0];
//     // artistNameSpan.appendChild(nameStored);
//     var nameText = document.createTextNode(nameStored);
//     artistNameSpan.appendChild(nameText);
//     console.log("New artist name appended");
//     console.log("--------");

//     // get input from About field
//     var aboutInput = document.getElementById("about-input");
//     var aboutStored = aboutInput.value;
//     // console.log(aboutStored);
//     var schoolSpan = document.getElementsByClassName("artist-school")[0];
//     // schoolSpan.appendChild(aboutStored);
//     var schoolText = document.createTextNode(aboutStored);
//     schoolSpan.appendChild(schoolText);
//     console.log("New school name appended");
//     console.log("--------");

//     // get input from Image URL field
//     var img = document.getElementsByTagName("img")[0]; 
//     var imageInput = document.getElementById("image-input");
//     var imageStored = imageInput.value;
//     // console.log(imageStored);
//     img.setAttribute("src", imageStored);
//     console.log("New image appended");
//     console.log("--------");

//     console.log("Hiding form!");
//     displayArtistForm();
//     console.log("***************");

    // console.log("Clearing the form...");

    // // clears and hides form
    // clearForm();
    // console.log("***************");
// }

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
    deleteBtn.setAttribute("onclick", "");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    artistDiv.appendChild(deleteBtn);
    
    console.log(artistContainer);

    /****** APPEND USER INPUT TO ARTIST CONTAINER ******/

    // get the input from Name field
    var nameInput = document.getElementById("name-input");
    var nameStored = nameInput.value;
    // console.log(nameStored);
    artistNameSpan.append(nameStored);

    // get input from About field
    var aboutInput = document.getElementById("about-input");
    var aboutStored = aboutInput.value;
    // console.log(aboutStored);
    schoolSpan.append(aboutStored);

    // get input from Image URL field
    var imageInput = document.getElementById("image-input");
    var imageStored = imageInput.value;
    // console.log(imageStored);
    img.setAttribute("src", imageStored);

    /****** CLEAR AND HIDE FORM ******/

    // hide artist form
    var artistForm = document.getElementById("artist-form");
    artistForm.style.display = "none";

    // resets fields
    nameInput.value = "";
    aboutInput.value = "";
    imageInput.value = "";
}