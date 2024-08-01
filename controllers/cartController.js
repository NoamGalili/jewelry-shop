
function saveCart(req, res) {
    req.session.cart = req.body; // שמירת נתוני העגלה ב-session
    res.json({ success: true });
}

function showPaymentPage(req, res) {
    const cart = req.session.cart || [];
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    res.render('payment', { total: total });
}

module.exports = {
    saveCart,
    showPaymentPage
};