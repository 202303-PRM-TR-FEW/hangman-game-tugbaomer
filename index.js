const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function createButton() {
  for (let index = 0; index < alphabet.length; index++) {
    const buttons = document.createElement("button");
    buttons.textContent = alphabet[index];
    const alphabetPart = document.getElementById("alphabet-part");
    alphabetPart.appendChild(buttons);
  }
}

createButton();

async function logJSONData() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const jsonData = await response.json();
  getGuessingWord(jsonData);
}

logJSONData();

function getGuessingWord(randomWord) {
  const guessingWord = randomWord.toString();
  const guessingWordLetters = guessingWord.split("");

  for (let index = 0; index < guessingWordLetters.length; index++) {
    const letters = guessingWordLetters[index];
    console.log(letters);
    const letterSpaces = document.createElement("span");
    letterSpaces.textContent = "-";
    const questionPart = document.getElementById("question-part");
    questionPart.appendChild(letterSpaces);
  }
}
