//pulling in Makeup schema from model file
const Makeup = require('./models/Makeup')

//setting up mongoose and bluebird
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/makeup');

//getting all makeup from db
function getAllMakeup () {
  return Makeup.find()
}

//getting makeup by ID#
function getMakeupById (makeupId) {
  return Makeup.findOne({ "_id": makeupId });
}


//adding new makeup item to db
function addMakeup (newMakeup) {
  const makeup = new Makeup(newMakeup)
  makeup.save(function (err) {
    console.log(err)
  })
  console.log("Hooray! New makeup added.")
  return Promise.resolve("success")
}

//deleting makeup from db using ID#
function deleteMakeup (makeupId) {
  return Makeup.deleteOne({ "_id": makeupId })
}

//updating collection using ID#
function updateMakeup (makeupID, makeupNew) {
  return Makeup.findOneAndUpdate({ "_id": makeupID }, makeupNew, { upsert : false })
}

//exporting functions
module.exports = {
  getAllMakeup, getMakeupById, addMakeup, deleteMakeup, updateMakeup
}
