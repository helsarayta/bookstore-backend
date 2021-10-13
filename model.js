const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
judul: {type:String, required:true},
pengarang: {type:String, required:true},
harga: {type:Number, required:true},
stok: {type:Number, required:true}
},
{
    collection: "koleksiBuku"
});

module.exports = mongoose.model("BukuModel", bookSchema);