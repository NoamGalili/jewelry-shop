const userService = require('../services/userService');

exports.getRegister = (req, res) => {
    res.render('register.ejs');
};

exports.postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already in use');
        }

        await userService.createUser({ username, email, password });
        res.redirect('/login.ejs');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
