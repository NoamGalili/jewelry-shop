const express = require('express')
const router = express.Router()

const branchesController = require('../controllers/branches')

router.route("/addBranch.ejs").get(branchesController.addBranch)
router.route("/deleteBranch.ejs").get(branchesController.deleteBranch)
router.route("/branches.ejs").get(branchesController.branches)
router.route("/aboutus.ejs").get(branchesController.aboutus)

module.exports = router