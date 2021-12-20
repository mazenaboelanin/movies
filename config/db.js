if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const mongoose = require('mongoose');

dbConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL);
    // check for connction
    const db = mongoose.connection;
    db.on('error', error => console.log(error));
    db.once('open', () => console.log('Connected to Database'));
}


module.exports = dbConnection;