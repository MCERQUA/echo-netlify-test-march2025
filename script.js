// Simple script for the Echo Test Site
document.addEventListener('DOMContentLoaded', () => {
    // Add current date to the page
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
    }
    
    // Add a click event listener to any button with class 'button'
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Button clicked! This is a demonstration of JavaScript functionality.');
        });
    });
});