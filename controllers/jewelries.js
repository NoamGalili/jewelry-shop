function getAlljewelries(req, res)
{
    res.render('jewelries.ejs',{
                         jewelry: []
                               })
}

// making the function public
module.exports = 
{
    getAlljewelries
}