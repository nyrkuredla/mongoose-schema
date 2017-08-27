const express = require('express')
const router = express.Router()
const {
  getAllMakeup, getMakeupById, getMakeupByBrand, getMakeupByType, addMakeup, deleteMakeup
} = require('../dal');

router
  .route('/')
  .get(function (req, res) {
      res.render('home')
    })

router
  .route('/all')
  .get(function (req, res) {
    getAllMakeup().then(function (makeup) {
    res.render('makeup', {makeup})
  })
})

router
  .route('/new')
  .get(function (req, res) {
    res.render('newMakeup')
  })
  .post(function (req, res) {
    console.log('req.body', req.body)
    addMakeup(req.body).then(function () {
      res.redirect('/')
    })
  })

router
    .route('/makeup/:makeupId')
    .get(function (req, res) {
      const makeupId = req.params.makeupId
      getMakeupById(makeupId).then(function (makeup) {
        res.render('singleMakeup', {makeup})
      })
    })

router
    .route('/types')
    .get(function (req, res) {
      res.render('types')
    })
    .post(function (req, res) {
      let chosenType = getMakeupByType(req.body.type);
      console.log(chosenType);
      res.send('wooo')
      // res.render('makeup', { makeup : chosenType })
    })

router
    .route('/brands')
    .get(function (req, res) {
      res.render('brands')
    })



  module.exports = router
