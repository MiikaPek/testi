// Ota mongoose käyttöön
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema;

let book = new bookSchema ({
    title: {
        type: String
    },
    author: {
        type: String
    },
    publisher: {
        type: String
    }, 
    read: {
        type: boolean
    }
},
    {colelction: "book"}
);

module.exports = mongoose.model("book", book);