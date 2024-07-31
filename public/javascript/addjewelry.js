const jewelriesController = require('../../controllers/jewelries')
document.addEventListener('DOMContentLoaded', () => {
    const jewelryForm = document.getElementById('jewelryForm');

    jewelryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // מונע את שליחת הטופס בצורה רגילה

        // שומר את כל הנתונים שהמשתמש הכניס לתוך משתנים
        const jewelryID = document.getElementById('jewelryID').value;
        const jewelryType = document.getElementById('jewelryType').value;
        const jewelryColor = document.getElementById('jewelryColor').value;
        const jewelryName = document.getElementById('jewelryName').value;
        const jewelryPhoto = document.getElementById('jewelryPhoto').value;
        const jewelryPrice = document.getElementById('jewelryPrice').value;
        const jewelryDescription = document.getElementById('jewelryDescription').value;
        const jewelryAvaliableStock = document.getElementById('jewelryAvaliableStock').value;
        
        jewelriesController.addJewelry(document)
    });

    funct(jewelryForm)
});