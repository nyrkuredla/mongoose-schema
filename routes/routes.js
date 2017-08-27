const express = require('express')
const router = express.Router()
const {
  getAllMakeup, getMakeupById, getMakeupByType, addMakeup, deleteMakeup, updateMakeup
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
  .route('/update/:id')
  .get(function (req, res) {
    const makeupId = req.params.id
    console.log(makeupId)
    getMakeupById(makeupId).then(function (makeup) {
      res.render('update', {makeup})
    })
  })
  .post(function (req, res) {
    console.log(req.body)
    const makeupId = req.body.id
    const makeupNew = req.body
    updateMakeup(makeupId, makeupNew).then(function (makeup) {
      res.redirect('/all')
    })

  })

router
  .route('/types')
  .get(function (req, res) {
    res.render('types')
  })
  .post(function (req, res) {
    let makeupType = req.body.type;
    console.log(makeupType)
    getMakeupByType(makeupType).then(function (makeup) {
      console.log(getMakeupByType(makeupType))
      res.render('makeup', {makeup: makeupType})
    })
  })

  module.exports = router
