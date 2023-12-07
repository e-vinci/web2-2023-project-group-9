const express = require('express');

const router = express.Router();

const {
  readPhrases,
  addPhrase,
  removePhrase,
  addSuggestedPhrase,
  readSuggestedPhrases,
  removeSuggestedPhrase,
} = require('../models/game');
// const { isAdmin } = require('../utils/auths');

router.get('/', async (req, res) => {
  const phrases = await readPhrases();
  res.json(phrases);
});

router.get('/readSuggestedPhrases', async (req, res) => {
  const suggestedPhrases = await readSuggestedPhrases();
  res.json(suggestedPhrases);
});

router.post('/addSuggestedPhrase', (req, res) => {
  const suggestedPhrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!suggestedPhrase) return res.status(404).send('suggested phrase not found');

  const addedSuggestedPhrase = addSuggestedPhrase(suggestedPhrase);

  return res.json(addedSuggestedPhrase);
});

router.delete('/deleteSuggestedPhrase/:id', (req, res) => {
  const removedSuggestedPhrase = removeSuggestedPhrase(req.params.id);

  return res.json(removedSuggestedPhrase);
});

router.post('/addPhrase', (req, res) => {
  const phrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!phrase) return res.status(404).send('phrase not found');

  const phraseAdded = addPhrase(phrase);

  return res.json(phraseAdded);
});

router.delete('/deletePhrase/:id', (req, res) => {
  const phraseDeleted = removePhrase(req.params.id);

  return res.json(phraseDeleted);
});

module.exports = router;
