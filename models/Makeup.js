const mongoose = require('mongoose')

const MakeupSchema = new mongoose.Schema({
brand: { type: String, required: true },
name: { type: String, required: true },
makeupType: String,
description: {
  price: Number,
  color: String
},
 imageURL: {type: String, required: true}
})


const Makeup = mongoose.model('Makeup', MakeupSchema)

module.exports = Makeup
