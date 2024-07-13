function getAlljewelries(req, res)
{
    res.render('jewelries.ejs',{
                         jewelry: []
                               })
}
function getAlljewelry(req, res)
{
    res.render('jewelry.ejs') //???
}
function deletejewelry(req, res)
{
    res.render('jewelry.ejs') //???
}
// making the function public
module.exports = 
{
    getAlljewelries
}