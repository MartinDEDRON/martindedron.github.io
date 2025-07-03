// Configuration dynamique des images
const imagePrefix = "images/Martin_DEDRON_";
const imageExtension = ".jpg";

const totalImages = 610;

// Génère la liste des chemins d’images
const images = Array.from({ length: totalImages }, (_, i) => {
  const index = String(i + 1).padStart(3, '0'); // ex: "001"
  return `${imagePrefix}${index}${imageExtension}`;
});

const realTotalImages = images.length;


// Sauvegarde en mémoire le chemin des images déjà passées
const passedImages = [];


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

//Textes à utiliser
const noteTextArray = [
"Leave behind the samsara of haste, the obviousness of notifications.\nFind peace in the disorganized, useless but above all, human, perceptions of your surroundings.",
"I intend through my work to make you wander.\nThus, photographs are displayed in places they 'shouldn't be' : seek, and you shall find.",
"Seek the subtle beauties that aren’t flashy enough to pierce through the overflowing stimulations that circle you like rainfall. \nEscape.",
"Fin a different sun, an angle, an instant from which the mute spaces’ whispers reach you, and resonate with your being’s deepest harmonies.",
"You choose whether you connect to the postmodern attention-seeking, or to the shy beauties that will never obviously call you. \nReach for what should truly be touching you.",
"Capture the winds and the warmth, the feelings and the unseen. \nThat isn’t tangible: it lies in thin air.\nThis is my artistic research.\nThis is Harvesting Contemplations.",
"Harvesting Contemplations aims at conveying your attention towards what truly deserves it.\n Shy beauties that aren’t tangible.\nOvershadowed details. Modern brightness.\nBy printing my 600 best captures from ten years of travelling through life and exhibiting them in unexpected places, I invite you to look deeper.\nTo find a different stance, a different vision.\nTo embrace the subtlety of harmony.\nThis is an invitation to wander for the body and for the mind. Unknown destination tickets for the soul.\n\nKeeping your eyes open,\nLiving slow,\nLooking around you,\nHarvesting Contemplations.",
]


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
