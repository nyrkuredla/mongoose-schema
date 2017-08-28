const express = require('express')
const router = express.Router()
const {
  getAllMakeup, getMakeupById, addMakeup, deleteMakeup, updateMakeup
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
  .route('/delete/:makeupId')
  .get(function (req, res) {
    const makeupId = req.params.makeupId
    getMakeupById(makeupId).then(function (makeup) {
      res.render('delete', {makeup})
    })
  })
  .post(function (req, res) {
    const makeupId = req.params.makeupId
    deleteMakeup(makeupId).then(function (makeup) {
      res.redirect('/')
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


  module.exports = router
