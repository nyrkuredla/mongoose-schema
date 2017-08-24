const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const {
  getAllMakeup, getMakeupById, getMakeupByBrand, getMakeupByType, addMakeup, deleteMakeup
} = require('./dal');
