// Configuration dynamique des images
const totalImages = 604; // ← change ce nombre selon ton nombre exact d’images
const imagePrefix = "images/Martin_DEDRON_";
const imageExtension = ".jpg";

// Génère la liste des chemins d’images
const images = Array.from({ length: totalImages }, (_, i) => {
  const index = String(i + 1).padStart(3, '0'); // ex: "001"
  return `${imagePrefix}${index}${imageExtension}`;
});

const noteTextArray = [
  "Leave behind the samsara of haste, the obviousness of notifications.\nFind peace in the disorganized, useless but above all, human, perceptions of your surroundings.",
  "I intend through my work to make you wander.\nThus, photographs are displayed in places they 'shouldn't be' : seek, and you shall find."
]

let currentImage = 0;

function nextImage() {
  let next;
  do {
    next = Math.floor(Math.random() * images.length);
  } while (next === currentImage);
  currentImage = next;

  const img = document.getElementById('main-image');
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[currentImage];
    img.style.opacity = 1;
  }, 250);
}

// Clic droit → afficher un texte aléatoire dans une popup
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  const randomText = noteTextArray[Math.floor(Math.random() * noteTextArray.length)];
  document.getElementById("popup-text").innerText = randomText.trim();
  document.getElementById("popup").style.display = "block";
});

// Fermer la popup si on clique n’importe où
document.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  }
});
