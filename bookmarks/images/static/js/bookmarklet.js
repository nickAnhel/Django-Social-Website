const SITE_URL = "//127.0.0.1:8000/";
const STYLE_URL = SITE_URL + "static/css/bookmarklet.css";
const MIN_WIDTH = 250;
const MIN_HEIGHT = 250;

// Load CSS
let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = STYLE_URL + "?r=" + Math.floor(Math.random()*9999999999999999);
head.appendChild(link);

// Load HTML
let body = document.getElementsByTagName("body")[0];
modalWindow = `
  <div id="bookmarklet">
    <a href="#" id="close">&times;</a>
    <h1>Select an image to bookmark:</h1>
    <div class="images"></div>
  </div>
`;
body.innerHTML += modalWindow;

/*
    Function implements the display and logic of bookmarklet
*/
function bookmarkletLaunch() {
    let bookmarklet = document.getElementById("bookmarklet");
    let imagesFound = bookmarklet.querySelector(".images");

    // Clear images found
    imagesFound.innerHTML = "";
    // Display bookmarklet
    bookmarklet.style.display = "block";

    // Close event
    bookmarklet.querySelector("#close")
                .addEventListener("click", function(){
        bookmarklet.style.display = "none"
    });

    // Find images in the DOM with the minimum dimensions
    images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
    images.forEach(image => {
        if (image.naturalWidth >= MIN_WIDTH &&
            image.naturalHeight >= MIN_HEIGHT
        ) {
            let imageFound = document.createElement("img");
            imageFound.src = image.src;
            imagesFound.append(imageFound);
        }
    });

    // Select image event
    imagesFound.querySelectorAll("img").forEach(image => {
        image.addEventListener("click", function(event) {
            imageSelected = event.target;
            bookmarklet.style.display = "none";
            window.open(
                SITE_URL + "images/create/?url=" +
                encodeURIComponent(imageSelected.src) +
                "&title=" +
                encodeURIComponent(document.title),
                "blank"
            );
        });
    });
}

bookmarkletLaunch();