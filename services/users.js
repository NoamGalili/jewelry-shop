const User = require ('../models/users')

const createUser = async (userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const newUser = new User({
            username: userData.username,
            email: userData.email,
            password: hashedPassword
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

async function calculateHash(message) 
{
        // Convert the message to a Uint8Array
        const msgUint8 = new TextEncoder().encode(message);
        
        // Calculate the hash
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        
        // Convert the hash to a hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        return hashHex;
}
    

module.exports = 
{
    createUser
}
