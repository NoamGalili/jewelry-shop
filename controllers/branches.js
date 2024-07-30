const branchesService = require('../services/branches')

function addBranch(req, res)
{
    res.render('addBranch.ejs')
}

function deleteBranch(req, res)
{
    res.render('deleteBranch.ejs')
}

function branches (req, res)
{
    res.render('branches.ejs')
}

module.exports = 
{
    addBranch,
    deleteBranch,
    branches
}