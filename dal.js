const Makeup = require('./models/Makeup')

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/makeup');

function getAllMakeup () {
  return Makeup.find()
}

function getMakeupById () {
  return Makeup.find({ _id: makeupId }).catch(function (err) {
    console.log(err)
  })
}

function getMakeupByBrand (brand) {
  return Makeup.findByBrand(brand);
}

function getMakeupByType (type) {
  return Makeup.findByType(type)
}

function addMakeup (newMakeup) {
  const makeup = new Makeup(newMakeup)
  makeup.save(function (err) {
    console.log(err)
  })
  console.log("Hooray! New makeup added.")
  return Promise.resolve("success")
}

function deleteMakeup (makeupId) {
  return Makeup.deleteOne({ _id: makeupId })
}

module.exports = {
  getAllMakeup, getMakeupById, getMakeupByBrand, getMakeupByType, addMakeup, deleteMakeup
}
