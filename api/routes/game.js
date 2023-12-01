const express = require('express');

const router = express.Router();

const { readPhrases, addPhrase } = require('../models/game');

router.get('/', async (req, res) => {
  const phrases = await readPhrases();
  res.json(phrases);
});

router.post('/addPhrase', async (req, res) => {
  const phrase = req?.body?.phrase?.length !== 0 ? req?.body?.phrase : undefined;

  if (!phrase) return res.status(404).send('phrase not found');

  const phraseAdded = addPhrase(phrase);

  return res.json(phraseAdded);
});

module.exports = router;
