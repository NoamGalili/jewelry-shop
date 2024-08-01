document.addEventListener('DOMContentLoaded', () => {
    const jewelryForm = document.getElementById('jewelryForm');

    jewelryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // const jewelryID = document.getElementById('jewelryID').value;
        const jewelryType = document.getElementById('jewelryType').value;
        const jewelryColor = document.getElementById('jewelryColor').value;
        const jewelryName = document.getElementById('jewelryName').value;
        const jewelryPhoto = document.getElementById('jewelryPhoto').value;
        const jewelryPrice = document.getElementById('jewelryPrice').value;
        const jewelryDescription = document.getElementById('jewelryDescription').value;
        const jewelryAvaliableStock = document.getElementById('jewelryAvaliableStock').value;
        const xhr = new XMLHttpRequest();
        xhr.open("post", "/addJewelry");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            jewelryType,
            jewelryColor,
            jewelryName,
            jewelryPhoto,
            jewelryPrice,
            jewelryDescription,
            jewelryAvaliableStock,
        }));

        // xhr.onload = function () {
        //     if (xhr.status === 200) {
        //         alert('Form submitted successfully.');
        //     } else {
        //         alert('Form submission failed.');
        //     }
        // };
    });
});