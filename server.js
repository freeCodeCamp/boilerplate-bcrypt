'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

/** 12) Require `bcrypt` here: */



// Now place yout code between START_(A(SYNC / END_(A)SYNC.
fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

/**
 * 13) Hash and Compare Passwords Asynchronously:
 * `bcrypt.hash()` & `bcrypt.compare()`
 * Use the already given constants above for the challenge!
 **/
//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

/**
 * 14) Hash and Compare Passwords Synchronously:
 * `bcrypt.hashSync()` & `bcrypt.compareSync()`
 **/
//START_SYNC



//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
