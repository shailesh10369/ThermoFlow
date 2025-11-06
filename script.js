document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperature');
    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');
    const swapButton = document.getElementById('swap-btn');
    const convertButton = document.getElementById('convert-btn');
    const resultsDiv = document.getElementById('results');
    const conversionResult = document.getElementById('conversion-result');
    const formulaUsed = document.getElementById('formula-used');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastMessage = document.getElementById('toast-message');
    
    let toastTimeout;
    
    // Check for saved theme preference or default to dark
    let isDarkMode = localStorage.getItem('darkMode') !== 'false';
    
    // Conversion formulas
    const conversionFormulas = {
        celsiusToFahrenheit: (c) => (c * 9/5) + 32,
        fahrenheitToCelsius: (f) => (f - 32) * 5/9,
        celsiusToKelvin: (c) => c + 273.15,
        kelvinToCelsius: (k) => k - 273.15,
        fahrenheitToKelvin: (f) => (f - 32) * 5/9 + 273.15,
        kelvinToFahrenheit: (k) => (k - 273.15) * 9/5 + 32
    };
    
    // Formula descriptions
    const formulaDescriptions = {
        celsiusToFahrenheit: "°F = (°C × 9/5) + 32",
        fahrenheitToCelsius: "°C = (°F - 32) × 5/9",
        celsiusToKelvin: "K = °C + 273.15",
        kelvinToCelsius: "°C = K - 273.15",
        fahrenheitToKelvin: "K = (°F - 32) × 5/9 + 273.15",
        kelvinToFahrenheit: "°F = (K - 273.15) × 9/5 + 32"
    };
    
    // Initialize the app
    function init() {
        // Set initial theme
        updateTheme();
        
        // Set up event listeners
        convertButton.addEventListener('click', handleConvertClick);
        swapButton.addEventListener('click', handleSwapClick);
        themeToggle.addEventListener('click', handleThemeToggle);
        
        // Allow conversion on Enter key press
        temperatureInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                handleConvertClick();
            }
        });
        
        // Auto-convert when inputs change (but don't show toast)
        temperatureInput.addEventListener('input', function() {
            convertTemperature(false); // Don't show toast for auto-conversion
        });
        fromUnitSelect.addEventListener('change', function() {
            convertTemperature(false); // Don't show toast for auto-conversion
        });
        toUnitSelect.addEventListener('change', function() {
            convertTemperature(false); // Don't show toast for auto-conversion
        });
        
        // Show initial empty state
        showEmptyResults();
    }
    
    // Update theme based on current mode
    function updateTheme() {
        if (isDarkMode) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }
    
    // Show empty results state
    function showEmptyResults() {
        const toUnit = toUnitSelect.value;
        const unitSymbols = {
            celsius: "°C",
            fahrenheit: "°F",
            kelvin: "K"
        };
        
        conversionResult.textContent = `00.00 ${unitSymbols[toUnit]}`;
        conversionResult.classList.add('empty-result');
        formulaUsed.textContent = 'Enter temperature to see formula';
        formulaUsed.classList.add('empty-result');
    }
    
    // Show toast notification
    function showToast(message, type) {
        // Clear any existing timeout
        if (toastTimeout) {
            clearTimeout(toastTimeout);
            toast.classList.remove('show');
            // Force reflow
            void toast.offsetWidth;
        }
        
        // Set toast content and style
        toastMessage.textContent = message;
        toast.className = 'toast';
        
        // Set icon and color based on type
        switch(type) {
            case 'success':
                toast.classList.add('toast-success');
                toastIcon.className = 'fas fa-check-circle';
                break;
            case 'warning':
                toast.classList.add('toast-warning');
                toastIcon.className = 'fas fa-exclamation-triangle';
                break;
            case 'error':
                toast.classList.add('toast-error');
                toastIcon.className = 'fas fa-exclamation-circle';
                break;
        }
        
        // Show toast with proper animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide after 3 seconds with proper animation
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            // Remove from DOM flow after animation
            setTimeout(() => {
                toast.classList.remove('hide');
            }, 400);
        }, 3000);
    }
    
    // Validate input
    function validateInput() {
        const temperature = temperatureInput.value.trim();
        
        // Remove error styling
        temperatureInput.classList.remove('input-error');
        
        // Check if input is empty
        if (temperature === '') {
            temperatureInput.classList.add('input-error');
            return { isValid: false, message: 'Please enter a temperature value' };
        }
        
        // Check if input is a valid number
        if (isNaN(parseFloat(temperature))) {
            temperatureInput.classList.add('input-error');
            return { isValid: false, message: 'Please enter a valid number' };
        }
        
        return { isValid: true, message: '' };
    }
    
    // Handle convert button click with animation
    function handleConvertClick() {
        // Add click animation
        convertButton.classList.add('button-click');
        setTimeout(() => {
            convertButton.classList.remove('button-click');
        }, 300);
        
        // Validate input first
        const validation = validateInput();
        if (!validation.isValid) {
            showToast(validation.message, 'error');
            return;
        }
        
        // Perform conversion and show success toast
        convertTemperature(true);
    }
    
    // Handle swap button click with animation
    function handleSwapClick() {
        // Add click animation
        swapButton.classList.add('button-click');
        setTimeout(() => {
            swapButton.classList.remove('button-click');
        }, 300);
        
        swapUnits();
        
        // Show toast notification for swap
        showToast('Units swapped successfully!', 'success');
    }
    
    // Handle theme toggle with animation
    function handleThemeToggle() {
        // Add click animation
        themeToggle.classList.add('button-click');
        setTimeout(() => {
            themeToggle.classList.remove('button-click');
        }, 300);
        
        toggleTheme();
        
        // NO TOAST for theme switching as requested
    }
    
    // Perform temperature conversion
    function convertTemperature(showToastMessage = false) {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        
        // Check if input is empty or invalid
        if (isNaN(temperature)) {
            // Show empty results instead of hiding
            showEmptyResults();
            return;
        }
        
        let result;
        let formulaKey;
        
        if (fromUnit === toUnit) {
            result = temperature;
            formulaKey = "same";
        } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = conversionFormulas.celsiusToFahrenheit(temperature);
            formulaKey = "celsiusToFahrenheit";
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = conversionFormulas.fahrenheitToCelsius(temperature);
            formulaKey = "fahrenheitToCelsius";
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            result = conversionFormulas.celsiusToKelvin(temperature);
            formulaKey = "celsiusToKelvin";
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            result = conversionFormulas.kelvinToCelsius(temperature);
            formulaKey = "kelvinToCelsius";
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            result = conversionFormulas.fahrenheitToKelvin(temperature);
            formulaKey = "fahrenheitToKelvin";
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            result = conversionFormulas.kelvinToFahrenheit(temperature);
            formulaKey = "kelvinToFahrenheit";
        }
        
        // Format the result
        const formattedResult = result.toFixed(2);
        
        // Get unit symbols
        const unitSymbols = {
            celsius: "°C",
            fahrenheit: "°F",
            kelvin: "K"
        };
        
        // Display the result
        conversionResult.textContent = `${formattedResult} ${unitSymbols[toUnit]}`;
        conversionResult.classList.remove('empty-result');
        
        // Display the formula used
        if (formulaKey === "same") {
            formulaUsed.textContent = "No conversion needed (same units)";
        } else {
            formulaUsed.textContent = formulaDescriptions[formulaKey];
        }
        formulaUsed.classList.remove('empty-result');
        
        // Show success toast only if requested
        if (showToastMessage && fromUnit !== toUnit) {
            showToast('Temperature converted successfully!', 'success');
        }
    }
    
    // Swap the from and to units
    function swapUnits() {
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        
        fromUnitSelect.value = toUnit;
        toUnitSelect.value = fromUnit;
        
        // Update results with current state
        const temperature = parseFloat(temperatureInput.value);
        if (isNaN(temperature)) {
            showEmptyResults();
        } else {
            convertTemperature(false); // Don't show toast for auto-conversion after swap
        }
    }
    
    // Toggle dark/light mode
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        updateTheme();
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    }
    
    // Initialize the application
    init();
});