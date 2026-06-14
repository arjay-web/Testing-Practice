export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (!/^[A-Z]$/i.test(char)) return char;

      let shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;

      if (char === char.toUpperCase()) {
        return alphabet[shiftedIndex].toUpperCase();
      } else {
        return alphabet[shiftedIndex];
      }
    })
    .join("");
}

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
  "z",
];
