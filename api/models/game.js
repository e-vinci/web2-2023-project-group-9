const path = require('node:path');

const { parse, serialize } = require('../utils/json');

const jsonDbPathForPhrase = path.join(__dirname, '/../data/phrases.json');
const jsonDbPathForSuggestedPhrase = path.join(__dirname, '/../data/suggestedPhrases.json');

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

const suggestedPhrases = [
  { id: 1, suggestedPhrase: 'La victoire est mienne !' },
];

/**
 * Read Phrases from JSON file
 * @returns {Array} An array representing the parsed content of the 'phrases.json' file.
 */
function readPhrases() {
  const phrasesTable = parse(jsonDbPathForPhrase, phrases);

  return phrasesTable;
}

/**
 * Read Suggested Phrases from JSON file
 * @returns {Array} An array representing the parsed content of the 'suggestedPhrases.json' file.
 */
function readSuggestedPhrases() {
  const suggestedPhraseTable = parse(jsonDbPathForSuggestedPhrase, suggestedPhrases);

  return suggestedPhraseTable;
}

/**
 * Remove a suggested phrase by ID
 * @param {number} id - The unique identifier of the suggested phrase to be removed.
 * @returns {Object|undefined} If the suggested phrase with the specified ID is found and removed,
 *  it returns the deleted suggested phrase object.
 *  If the ID is not found, it returns undefined.
 */
function removeSuggestedPhrase(id) {
  const SuggestedphraseTable = parse(jsonDbPathForSuggestedPhrase, suggestedPhrases);

  const parameterId = parseInt(id, 10);
  const foundPhrase = SuggestedphraseTable.findIndex((phrase) => phrase.id === parameterId);
  if (foundPhrase < 0) return undefined;

  const deletedSuggestedPhrases = SuggestedphraseTable.splice(foundPhrase, 1);
  console.table(deletedSuggestedPhrases);
  const deletedPhrase = deletedSuggestedPhrases[0];

  serialize(jsonDbPathForSuggestedPhrase, SuggestedphraseTable);

  return deletedPhrase;
}

/**
 * Add a new phrase
 * @param {string} phrase - The new phrase to be added.
 * @returns {Object} The newly added phrase object, including its unique identifier.
 */
function addPhrase(phrase) {
  const phraseTable = parse(jsonDbPathForPhrase, phrases);

  const newPhrase = {
    id: getNextIdForPhraseTable(),
    phrase,
  };

  phraseTable.push(newPhrase);

  serialize(jsonDbPathForPhrase, phraseTable);

  return newPhrase;
}

/**
 * Add a new suggested phrase
 * @param {string} suggestedPhrase - The new suggested phrase to be added.
 * @returns {Object} The newly added suggested phrase object, including its unique identifier.
 */
function addSuggestedPhrase(suggestedPhrase) {
  const suggestedPhraseTable = parse(jsonDbPathForSuggestedPhrase, suggestedPhrases);

  const newSuggestedPhrase = {
    id: getNextIdForSuggestedPhraseTable(),
    suggestedPhrase,
  };

  suggestedPhraseTable.push(newSuggestedPhrase);

  serialize(jsonDbPathForSuggestedPhrase, suggestedPhraseTable);

  return newSuggestedPhrase;
}

/**
 * Read a single suggested phrase by ID
 * @param {number} id - The unique identifier of the suggested phrase to be retrieved.
 * @returns {Object|undefined} If the suggested phrase with the specified ID is found,
 * it returns the suggested phrase object. If the ID is not found, it returns undefined.
 */
function removePhrase(id) {
  const phraseTable = parse(jsonDbPathForPhrase, phrases);

  const parameterId = parseInt(id, 10);
  const foundPhrase = phraseTable.findIndex((phrase) => phrase.id === parameterId);
  if (foundPhrase < 0) return undefined;

  const deletedPhrases = phraseTable.splice(foundPhrase, 1);
  console.table(deletedPhrases);
  const deletedPhrase = deletedPhrases[0];

  serialize(jsonDbPathForPhrase, phraseTable);

  return deletedPhrase;
}

/**
 * Read a single phrase by ID
 * @param {number} id - The unique identifier of the phrase to be retrieved.
 * @returns {Object|undefined} If the phrase with the specified ID is found,
 * it returns the phrase object. If the ID is not found, it returns undefined.
 */
function readOneSuggestedPhrase(id) {
  const idNumber = parseInt(id, 10);
  const suggestedPhrasesTable = parse(jsonDbPathForSuggestedPhrase, suggestedPhrases);
  const indexFound = suggestedPhrasesTable.findIndex((phrase) => phrase.id === idNumber);
  if (indexFound < 0) return undefined;

  return suggestedPhrasesTable[indexFound];
}

/**
 * Get the next available unique identifier for phrases.
 * @returns {number} The next available unique identifier for phrases based on the existing data.
 */
function readOnePhrase(id) {
  const idNumber = parseInt(id, 10);
  const phraseTable = parse(jsonDbPathForPhrase, phrases);
  const indexFound = phraseTable.findIndex((phrase) => phrase.id === idNumber);
  if (indexFound < 0) return undefined;

  return phraseTable[indexFound];
}

/**
 * Get the next available unique identifier for phrases.
 * @returns {number} The next available unique identifier for phrases based on the existing data.
 */
function getNextIdForPhraseTable() {
  const phraseTable = parse(jsonDbPathForPhrase, phrases);
  const lastItemIndex = phraseTable?.length !== 0 ? phraseTable.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = phraseTable[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

/**
 * Get the next available unique identifier for suggested phrases.
 * @returns {number} The next available unique identifier
 * for suggested phrases based on the existing data.
 */
function getNextIdForSuggestedPhraseTable() {
  const phraseTable = parse(jsonDbPathForSuggestedPhrase, suggestedPhrases);
  const lastItemIndex = phraseTable?.length !== 0 ? phraseTable.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = phraseTable[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  readPhrases,
  addPhrase,
  removePhrase,
  addSuggestedPhrase,
  readSuggestedPhrases,
  removeSuggestedPhrase,
  readOneSuggestedPhrase,
  readOnePhrase,
};
