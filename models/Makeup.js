const mongoose = require('mongoose')

const MakeupSchema = new mongoose.Schema({
brand: { type: String, required: true },
name: { type: String, required: true },
makeupType: String,
description: [{
  price: Number,
  color: {type: String}
}],
 imageURL: {type: String, required: true}
})

//creating functions to sort through database
MakeupSchema.statics.findByBrand = function (brand, cb) {
  return this.find({brand: brand})
}
MakeupSchema.statics.findByType = function (makeupType, cb) {
  return this.find({makeupType: makeupType})
}


const Makeup = mongoose.model('Makeup', MakeupSchema)

module.exports = Makeup
