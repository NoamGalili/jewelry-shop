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

function aboutus (req, res)
{
    res.render('aboutus.ejs')
}

module.exports = 
{
    addBranch,
    deleteBranch,
    branches,
    aboutus
}