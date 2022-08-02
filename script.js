let addParagraphs = document.getElementById("p-button");
let addImages = document.getElementById("img-button");
let imgDiv = document.getElementById("img-div");
let pDiv = document.getElementById("p-div");


addParagraphs.onclick = function() {
    let paragraphs = document.createElement('p');
    paragraphs.innerHTML += "esam's cat is cute!";
    pDiv.appendChild(paragraphs);
    pDiv.style.display = "inline-block";
    imgDiv.style.display = "none";
}


addImages.onclick = function () {
    let images = document.createElement("img");
    images.src = "images/luna.png";
    imgDiv.appendChild(images);
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
}

