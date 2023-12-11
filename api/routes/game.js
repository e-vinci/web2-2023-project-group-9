const express = require('express');

const router = express.Router();

const {
  readPhrases,
  addPhrase,
  removePhrase,
  addSuggestedPhrase,
  readSuggestedPhrases,
  removeSuggestedPhrase,
  readOneSuggestedPhrase,
  readOnePhrase,
} = require('../models/game');

const { authorize, isAdmin } = require('../utils/auths');

router.get('/', (req, res) => {
  const phrases = readPhrases();
  res.json(phrases);
});

router.post('/addPhrase', authorize, isAdmin, (req, res) => {
  const phrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!phrase) return res.status(404).send('phrase not found');

  const phraseAdded = addPhrase(phrase);

  console.log(phraseAdded);
  return res.json(phraseAdded);
});

router.delete('/deletePhrase/:id', authorize, isAdmin, (req, res) => {
  const phraseDeleted = removePhrase(req.params.id);
  console.log(phraseDeleted);
  return res.json(phraseDeleted);
});

router.get('/readOnePhraseFromGame/:id', (req, res) => {
  const phrase = readOnePhrase(req.params.id);
  return res.json(phrase);
});

router.get('/readSuggestedPhrases', (req, res) => {
  const suggestedPhrases = readSuggestedPhrases();
  res.json(suggestedPhrases);
});

router.get('/readOneSuggestedPhrase/:id', (req, res) => {
  const suggestedPhrase = readOneSuggestedPhrase(req.params.id);

  return res.json(suggestedPhrase);
});

router.post('/addSuggestedPhrase', authorize, (req, res) => {
  const suggestedPhrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!suggestedPhrase) return res.status(404).send('suggested phrase not found');

  const addedSuggestedPhrase = addSuggestedPhrase(suggestedPhrase);

  return res.json(addedSuggestedPhrase);
});

router.delete('/deleteSuggestedPhrase/:id', authorize, isAdmin, (req, res) => {
  const removedSuggestedPhrase = removeSuggestedPhrase(req.params.id);

  return res.json(removedSuggestedPhrase);
});

module.exports = router;
