const { Router } = require('express');

const router = Router();

const LogEntry = require('../models/LogEntry')

router.get('/', async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error) }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
    console.log(req.body);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'TypeError') {
      res.status(400)
    }
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error);
  }

});

module.exports = router;