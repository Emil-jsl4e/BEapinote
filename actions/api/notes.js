//folder moze sie nazywac tez Controllers
const Note = require('../../db/models/note')
module.exports = {
    saveNotes(req, res) {

        const newNote = new Note({
            title: 'Zrobić zakupy',
            body: 'mleko, jajka'
        });
        newNote.save().then(() => {
            console.log('Notatka została zapisana')
        });

        res.send("Strona gówna działa!");
    }
}