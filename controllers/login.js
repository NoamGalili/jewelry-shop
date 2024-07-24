const loginService = require("../services/login")

// פןנקציה עם יכולת הגנה רק לאחר התחברות נכונה זה ה- NEXT
function isLoggedIn(req, res, next){
    if(req.session.username != null) // בדיקה אם השם משתמש נכון אז תעבור לבקשה הבאה 
        return next()
    else
      res.redirect('/login') // מעבר לעמוד התחברות אם הוא לא מכיר אותו 
}

function foo(req, )