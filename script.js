// Configuration dynamique des images
const imagePrefix = "images/Martin_DEDRON_";
const imageExtension = ".jpg";

const totalImages = 604;

// Génère la liste des chemins d’images
const images = Array.from({ length: totalImages }, (_, i) => {
  const index = String(i + 1).padStart(3, '0'); // ex: "001"
  return `${imagePrefix}${index}${imageExtension}`;
});

const realTotalImages = images.length;


// Sauvegarde en mémoire le chemin des images déjà passées
const passedImages = [];


const noteTextArray = [
  "Leave behind the samsara of haste, the obviousness of notifications.\nFind peace in the disorganized, useless but above all, human, perceptions of your surroundings.",
  "I intend through my work to make you wander.\nThus, photographs are displayed in places they 'shouldn't be' : seek, and you shall find."
]

let currentImage = 0;

function nextImage() {

  // Reset le tableau des images déjà passées si elles sont toutes passées
  if (passedImages.length === realTotalImages) {
    passedImages = [];
  }

  let next;
  do {
    next = Math.floor(Math.random() * images.length);
  } while (next === currentImage);
  currentImage = next;
  passedImages.push(images[currentImage]);

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
