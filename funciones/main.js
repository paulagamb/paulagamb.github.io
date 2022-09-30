let myName = "paula";
const nameSpan = document.getElementById("name");
nameSpan.textContent = myName;

let myAge = 17;
const ageSpan = document.getElementById("age");
ageSpan.textContent = myAge;

let likesMusic = true;
let likesMusicText;

if(likesMusic === true) {
  likesusicText = "me gusta la musica";
} else {
  likesMusicText = "no me gusta la musica";
}

const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(key) {

  const noteAudio = document.getElementById(key.dataset.note);

  noteAudio.currentTime = 0;

  noteAudio.play();


  key.classList.add('active');

  noteAudio.addEventListener('ended', () => {

    key.classList.remove('active');
  });
}


keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});




document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  console.log(whiteKeys[whiteKeyIndex]);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});
