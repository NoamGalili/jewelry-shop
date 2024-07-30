const User = require ('../models/users')

const createUser = async (userData) => 
{
    try 
    {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = await calculateHash(userData.UserPassword + salt);

        const newUser = new User(
        {
            UserID: userData.UserID,
            UserType: userData.UserType,
            Username: userData.Username,
            UserMail: userData.UserMail,
            UserPasswordSHA256Hash: hash,
            UserSalt: salt
        });

        await newUser.save();
        return newUser;
    }
    
    catch (error) 
    {
        console.error('Error creating user:', error);
        throw error;
    }
}

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
