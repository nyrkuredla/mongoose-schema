const mongoose = require('mongoose')

const MakeupSchema = new mongoose.Schema({
brand: { type: String, require: true },
name: { type: String, require: true },
makeupType: String,
description: [{
  price: Number,
  color: {type: String, require: true}
 }],
price: Number
})

MakeupSchema.statics.findByBrand = function (brand, cb) {
  return this.find({brand: brand})
}
MakeupSchema.statics.findByType = function (makeupType, cb) {
  return this.find({makeupType: makeupType})
}


const Makeup = mongoose.model('Makeup', MakeupSchema)

module.exports = Makeup
