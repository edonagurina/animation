document.addEventListener('DOMContentLoaded', function() {
    const dialogue1 = document.getElementById('dialogue1');
    const dialogue2 = document.getElementById('dialogue2');

    setTimeout(() => {
        dialogue1.style.display = 'block';
    }, 2000); // Show first dialogue after 2 seconds

    setTimeout(() => {
        dialogue1.style.display = 'none';
        dialogue2.style.display = 'block';
    }, 5000); // Hide first dialogue and show second dialogue after 5 seconds

    setTimeout(() => {
        dialogue2.style.display = 'none';
    }, 8000); // Hide second dialogue after 8 seconds
});
