//folder moze sie nazywac tez Controllers
const Note = require('../../db/models/note')
class NoteActions {

    saveNotes(req, res) {
        // const newNote = new Note({
        //     title: 'Zrobić zakupy',
        //     body: 'mleko, jajka'
        // });
        // newNote.save().then(() => {
        //     console.log('Notatka została zapisana')
        // });
        const title = req.body.title;
        const body = req.body.body;
        res.send("Notatka została stworzona! <br>" + "Tytuł: " + title + " Treść: " + body);
    }

    getAllNotes(req, res) {
        res.send('.API działa.')
    }

    getNote(req, res) {
        res.send('Info o notatce')
    }

    updateNote(req, res) {
        res.send('Notatka zaktualizowana')
    }

    deleteNotes(req, res) {
        const id = req.params.id;
        res.send('Notatka usunieta o id: ' + id);
    }

}

module.exports = new NoteActions();