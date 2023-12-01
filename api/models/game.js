const path = require('node:path');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/phrases.json');

const phrases = [
  'C\'est l\'heure de la bataille!',
  'Prêt pour le duel ultime?',
  'Défends-toi avec détermination!',
  'J\'espère que le combat sera inoubliable!',
  'La victoire est à portée de main!',
  'Ne laisse pas ton adversaire t\'échapper!',
  'Les héros se lèvent dans l\'arène!',
  'Le combat commence, tiens bon!',
  'L\'épique combat des titans commence!',
  'Que la force soit avec toi!',
  'La fureur du combat t\'envahit!',
  'Le destin est entre tes mains!',
  'La gloire t\'attend au bout du chemin!',
  'N\'abandonne jamais, guerrier!',
  'Affronte tes peurs, conquiers le combat!',
  'L\'arène résonne de cris de victoire!',
  'Saisis ta destinée et combat!',
  'Les étoiles te guideront vers la victoire!',
  'L\'honneur est ta récompense!',
  'Ton courage est ton arme la plus puissante!',
  'Rien n\'est impossible pour un vrai guerrier!',
  'Ta légende s\'écrit dans le sang du combat!',
  'L\'adversité te rend plus fort!',
  'Triomphe dans la chaleur du combat!',
  'Le monde regarde, sois un champion!',
];

async function readPhrases() {
  const phrasesTable = parse(jsonDbPath, phrases);

  return phrasesTable;
}

async function addPhrase(phrase) {
  const phraseTable = parse(jsonDbPath, phrases);

  phraseTable.push(phrase);

  serialize(jsonDbPath, phraseTable);

  return phrase;
}

module.exports = { readPhrases, addPhrase };
