const express = require('express')
const router = express.Router()

const branchesController = require('../controllers/branches')

router.route("/addBranch.ejs").get(branchesController.addBranch)
router.route("/deleteBranch.ejs").get(branchesController.deleteBranch)



module.exports = router