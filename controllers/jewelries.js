const jewelriesService = require('../services/jewelries');
const Jewelry = require('../models/jewelries');

async function getNewjewelries(req, res) {
    try {
        const jewelries = await jewelriesService.getAllJewelries();
        if (jewelries.length === 0) {
            console.log("No jewelries found in the database.");
        } else {
            console.log("Fetched jewelries: ", jewelries);
        }
        res.render('home.ejs', { jewelries });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getJewelryByID(req, res) {
    const jewelryId = req.query.id;
    try {
        const jewelry = await jewelriesService.getJewelryByID(jewelryId);
        if (!jewelry) {
            res.status(404).render("404.ejs"); // Create a custom 404 page...
        } else {
            res.render('jewelry.ejs', { jewelry });
        }
    } catch (error) {
        console.error('Error fetching jewelry:', error);
        res.status(500).send('Server Error');
    }
}


function getdeleteJewelryPg(req, res) {
    res.render('deletejewelry.ejs');
}


async function deleteJewelry(req, res) {
    try {
        const { jewelryID } = req.body;
        await Jewelry.findByIdAndDelete(jewelryID);
        console.log(jewelryID);
        return res.status(200).send('Jewelry removed successfully.');
        
    } catch (error) {
        console.error('failed to remove jewelry:', error);
        return res.status(500).send('Failed to remove jewelry.');
    }
}

function getAddJewelryPg(req, res) {
    res.render('addjewelry.ejs');
}

async function addJewelry(req, res) {
    try {
        const data = { ...req.body };
        const newjewlry = await Jewelry.create({ ...data });
        return res.status(200).send('Jewelry added successfully.');
    } catch (error) {
        console.error('failed to add jewelry:', error);
        throw error;
    }
}

const getJewelriesByType = async (req, res) => {
    try {
        const category = req.query.category || 'All'; // Use the query parameter to determine the category
        const query = category === 'All' ? {} : { JewelryType: category }; // Build query based on category
        const jewelries = await Jewelry.find(query); // Fetch jewelries from the database

        res.render('jewelries.ejs', {
            JewelryType: category,
            jewelries: jewelries
        });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Server Error');
    }
};

const searchJewelry = async (req, res) => {
    const jewelry = await jewelriesService.getJewelriesByType(req.params.type);
    res.json(jewelry);
}

const getAlljewelries = async (req, res) => {
    try {
        const jewelryType = req.query.type || 'All'; // Use the query parameter to determine the type
        const jewelries = await Jewelry.find({ type: jewelryType }); // Fetch jewelries from the database

        res.render('jewelries.ejs', {
            JewelryType: jewelryType,
            jewelries: jewelries
        });
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).send('Server Error');
    }
};

const getAllNecklaces = async () => {
    try {
        return await Jewelry.find({ JewelryType: 'Necklaces' });
    } catch (error) {
        console.error('Error fetching necklaces:', error);
        throw error;
    }
};



module.exports = {
    getAlljewelries,
    getNewjewelries,
    getJewelryByID,
    deleteJewelry,
    getAddJewelryPg,
    searchJewelry,
    getJewelriesByType,
    getAllNecklaces,
    getdeleteJewelryPg,
    addJewelry
}
