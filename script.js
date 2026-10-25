const overlay = document.getElementById("letterOverlay");
const closeButton = document.getElementById("closeLetter");
const modalPhoto = document.getElementById("modalPhoto");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const letterContent = document.getElementById("letterContent");
const letterSignature = document.getElementById("letterSignature");

const letters = {
  self: {
    image: "mjp.jpg", alt: "My photo", kicker: "A LETTER TO MY FUTURE SELF", title: "HELLO SELF,",
    paragraphs: [
  "22 YEARS OF EXISTENCE KANA. ALAM KONG ANDAMI MO NG NAPAGDAANAN, ALAM KONG MINSAN NAIISIP MO NA FAILURE KA KASI WALA KAPANG NAPAPATUNAYAN, ALAM KONG NAIISIP MO NA WHAT IF WALA KANG MARARATING SA BUHAY.",
  "PERO ALAM NATIN NA LUMALABAN KA AT PARA SA PAMILYA MO. ALAM KONG KAKAYANIN MO ANG BAWAT LABAN NA HAHARAPIN NATIN IN THE NEAR FUTURE.",
  "ALAM NATING KAKAYANIN MO TO KASAMA SI PAPA GOD. DASAL LANG AT LABAN LANG.",
  "ALAM KO IN THE FUTURE MAY PATUTUNGUHAN TAYO. LABAN LANG SELF, ANOS LABAT WALAN SANSYA.",
  "PARA SA MGA TAONG NAG MAMAHAL AT NAG MAMALASAKIT SATIN. ALAM KONG MAG TATAGUMPAY TAYO FUTURE SELF.",
  "IN THE FUTURE, ALAM KONG MAGIGING SUCCESSFUL TAYO. ALAM KONG MAABOT MO LAHAT NG PANGARAP AT GOALS NA NASA ISIP MO. KAHIT ANONG MANGYARI, WALANG SUSUKO AT WALANG BIBITAW. KAYANG-KAYA NATIN 'TO, SELF!"
], signature: "PARA SA PAMILYA", signoff: "YOUR PAST SELF ♡"
  },
  mama: {
    image: "naytay.jpeg", alt: "My mama", kicker: "A LETTER TO MY MAMA", title: "MA,",
    paragraphs: [
      "ALAM KONG SA BUONG BUHAY MO IGINUGOL MO YUNG BUHAY MO SA PAG TATAGUYOD PARA SA IKAKABUTI KO.",
      "LAHAT NG SAKRIPISYO MO SUSUKLIAN KO DI PA SA NGAYON PERO MAIPAPANGAKO NA LAHAT NG TO MAY PATUTUNGUHAN IPAPANGAKO KO YAN SAYO MA.",
      "IN FUTURE MA ALAM KO MAIBABALIK KO RIN ANG MGA SAKRIPISYO NA IBINIGAY MO SAKIN UNTI UNTI."
    ], signature: "PARA SA'YO, MA", signoff: "YOUR CHILD, WITH LOVE ♡"
  },
  parents: {
    image: "mama.jpeg", alt: "My mother and father", kicker: "A LETTER TO NAY & TAY", title: "NAY, TAY,",
    paragraphs: [
      "MARAMING MARAMING SALAMAT SA PAG AARUGA NA BINIGAY NYO SAKIN SIMULA NG PAG KA BATA KO.",
      "ALAM KONG MINAHAL AT INASIKASO NYO KO NG MABUTI WALA MAN NA KAYO SA PILING NAMIN INANTAY NYO MUNA AKONG MAKITANG MAKAGRADUATE.",
      "MARAMING MARAMING SALAMAT NAY AT TAY SA PAG MAMAHAL DI KO KAYO MALILIMUTANG DALAWA."
    ], signature: "HANGGANG SA MULI, NAY AT TAY", signoff: "HINDI KO KAYO MALILIMUTAN ♡"
  }
};

function openLetter(key) {
  const letter = letters[key];
  if (!letter) return;
  modalPhoto.src = letter.image;
  modalPhoto.alt = letter.alt;
  modalKicker.textContent = letter.kicker;
  modalTitle.textContent = letter.title;
  letterContent.replaceChildren();

  letter.paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    letterContent.appendChild(paragraph);
  });

  letterSignature.replaceChildren();
  const signature = document.createElement("span");
  const signoff = document.createElement("strong");
  signature.textContent = letter.signature;
  signoff.textContent = letter.signoff;
  letterSignature.append(signature, signoff);

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

function closeLetter() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-letter]").forEach((button) => {
  button.addEventListener("click", () => openLetter(button.dataset.letter));
});
closeButton.addEventListener("click", closeLetter);
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeLetter();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("show")) closeLetter();
});
