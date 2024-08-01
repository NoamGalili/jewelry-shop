document.addEventListener('DOMContentLoaded', () => {
    const jewelryForm = document.getElementById('jewelryForm');

    jewelryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // const jewelryID = document.getElementById('jewelryID').value;
        const jewelryID = document.getElementById('jewelryID').value;
    
        const xhr = new XMLHttpRequest();
        xhr.open("delete", "/deleteJewelry");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            jewelryID
        }));

        
    });
});