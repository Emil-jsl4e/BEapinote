const express = require('express');
const router = express.Router();
const noteActions = require('../actions/api/noteActions');

router.get('/notes', noteActions.getAllNotes);
router.get('/notes/:id', noteActions.getNote);
router.post('/notes', noteActions.saveNotes);
router.put('/notes/:id', noteActions.updateNote);
router.delete('/notes/:id', noteActions.deleteNotes);

module.exports = router;