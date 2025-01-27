// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the display element once the DOM is loaded
    const display = document.getElementById('display');

    // Make functions available globally
    window.appendToDisplay = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = '';
    }

    window.backspace = function() {
        display.value = display.value.slice(0, -1);
    }

    window.calculate = function() {
        try {
            const result = eval(display.value);
            display.value = Number.isFinite(result) ? result : 'Error';
        } catch (error) {
            display.value = 'Error';
            setTimeout(clearDisplay, 1000);
        }
    }

    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        // Number keys and operators
        if (key >= '0' && key <= '9' || 
            key === '.' || 
            key === '+' || 
            key === '-' || 
            key === '*' || 
            key === '/' || 
            key === '(' || 
            key === ')') {
            appendToDisplay(key);
        } 
        // Enter key for calculation
        else if (key === 'Enter') {
            calculate();
        } 
        // Backspace for deletion
        else if (key === 'Backspace') {
            backspace();
        } 
        // Escape key to clear
        else if (key === 'Escape') {
            clearDisplay();
        }
    });
});