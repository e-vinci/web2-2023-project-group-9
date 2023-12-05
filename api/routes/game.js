const express = require('express');

const router = express.Router();

const { readPhrases, addPhrase, removePhrase } = require('../models/game');
const { isAdmin } = require('../utils/auths');

router.get('/', async (req, res) => {
  const phrases = await readPhrases();
  res.json(phrases);
});

router.post('/addPhrase', isAdmin, (req, res) => {
  const phrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!phrase) return res.status(404).send('phrase not found');

  const phraseAdded = addPhrase(phrase);

  return res.json(phraseAdded);
});

router.delete('/deletePhrase/:id', isAdmin, (req, res) => {
  const phraseDeleted = removePhrase(req.params.id);

  return res.json(phraseDeleted);
});

module.exports = router;
