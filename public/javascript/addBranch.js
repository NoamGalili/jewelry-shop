document.addEventListener('DOMContentLoaded', () => {
    const branchForm = document.getElementById('branchForm');

    branchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // מונע את שליחת הטופס בצורה רגילה

        // שומר את כל הנתונים שהמשתמש הכניס לתוך משתנים
        const branchId = document.getElementById('branchId').value;
        const branchName = document.getElementById('branchName').value;
        const branchCoordinates = document.getElementById('branchCoordinates').value;
        const branchAddress = document.getElementById('branchAddress').value;
        const branchOpeningHours = document.getElementById('branchOpeningHours').value;
        const branchManager = document.getElementById('branchManager').value;
        const branchManagerPhoto = document.getElementById('branchManagerPhoto').value;

    });
});