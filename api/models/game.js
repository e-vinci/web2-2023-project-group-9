const path = require('node:path');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/phrases.json');

const phrases = [
  { id: 1, phrase: 'C\'est l\'heure de la bataille!' },
  { id: 2, phrase: 'Prêt pour le duel ultime?' },
  { id: 3, phrase: 'Défends-toi avec détermination!' },
  { id: 4, phrase: 'J\'espère que le combat sera inoubliable!' },
  { id: 5, phrase: 'La victoire est à portée de main!' },
  { id: 6, phrase: 'Ne laisse pas ton adversaire t\'échapper!' },
  { id: 7, phrase: 'Les héros se lèvent dans l\'arène!' },
  { id: 8, phrase: 'Le combat commence, tiens bon!' },
  { id: 9, phrase: 'L\'épique combat des titans commence!' },
  { id: 10, phrase: 'Que la force soit avec toi!' },
  { id: 11, phrase: 'La fureur du combat t\'envahit!' },
  { id: 12, phrase: 'Le destin est entre tes mains!' },
  { id: 13, phrase: 'La gloire t\'attend au bout du chemin!' },
  { id: 14, phrase: 'N\'abandonne jamais, guerrier!' },
  { id: 15, phrase: 'Affronte tes peurs, conquiers le combat!' },
  { id: 16, phrase: 'L\'arène résonne de cris de victoire!' },
  { id: 17, phrase: 'Saisis ta destinée et combat!' },
  { id: 18, phrase: 'Les étoiles te guideront vers la victoire!' },
  { id: 19, phrase: 'L\'honneur est ta récompense!' },
  { id: 20, phrase: 'Ton courage est ton arme la plus puissante!' },
  { id: 21, phrase: 'Rien n\'est impossible pour un vrai guerrier!' },
  { id: 22, phrase: 'Ta légende s\'écrit dans le sang du combat!' },
  { id: 23, phrase: 'L\'adversité te rend plus fort!' },
  { id: 24, phrase: 'Triomphe dans la chaleur du combat!' },
  { id: 25, phrase: 'Le monde regarde, sois un champion!' },
];

async function readPhrases() {
  const phrasesTable = parse(jsonDbPath, phrases);

  return phrasesTable;
}

async function addPhrase(phrase) {
  const phraseTable = parse(jsonDbPath, phrases);

  const newPhrase = {
    id: getNextId(),
    phrase,
  };

  phraseTable.push(newPhrase);

  serialize(jsonDbPath, phraseTable);

  return newPhrase;
}

async function removePhrase(id) {
  const phraseTable = parse(jsonDbPath, phrases);

  const parameterId = parseInt(id, 10);
  const foundPhrase = phraseTable.findIndex((phrase) => phrase.id === parameterId);
  if (foundPhrase < 0) return undefined;

  const deletedPhrases = phraseTable.splice(foundPhrase, 1);
  console.table(deletedPhrases);
  const deletedPhrase = deletedPhrases[0];

  serialize(jsonDbPath, phraseTable);

  return deletedPhrase;
}

function getNextId() {
  const phraseTable = parse(jsonDbPath, phrases);
  const lastItemIndex = phraseTable?.length !== 0 ? phraseTable.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = phraseTable[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}
module.exports = { readPhrases, addPhrase, removePhrase };
