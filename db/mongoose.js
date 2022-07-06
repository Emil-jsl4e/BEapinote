const {connect} = require("mongoose");
const {database} = require('../config')

connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Połaczenie z baza danych')
});



