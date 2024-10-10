document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = document.getElementById('tempInput').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultSection = document.getElementById('resultSection');
    const resultDisplay = document.getElementById('result');
    const explanationDisplay = document.getElementById('explanation');
    const calculationDisplay = document.getElementById('calculation'); // Tempat untuk cara perhitungan

    let result, explanation, calculation;

    // Validasi input apakah valid atau tidak
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDisplay.textContent = 'Please enter a valid temperature';
        resultSection.style.display = 'block';
        return;
    }

    const temp = parseFloat(temperatureInput);

    // Logika konversi untuk Fahrenheit ke Celsius
    if (conversionType === 'toCelsius') {
        result = (temp - 32) * 5 / 9;
        explanation = `${temp} Fahrenheit is equal to ${result.toFixed(2)} Celsius.`;
        calculation = `S(°C) = (S(°F) - 32) × 5/9<br>S(°C) = (${temp} - 32) × 5/9<br>S(°C) = ${result.toFixed(2)}°C`;
    
    // Logika konversi untuk Celsius ke Fahrenheit
    } else if (conversionType === 'toFahrenheit') {
        result = (temp * 9 / 5) + 32;
        explanation = `${temp} Celsius is equal to ${result.toFixed(2)} Fahrenheit.`;
        calculation = `S(°F) = (S(°C) × 9/5) + 32<br>S(°F) = (${temp} × 9/5) + 32<br>S(°F) = ${result.toFixed(2)}°F`;
    }

    // Menampilkan hasil dan penjelasan pada halaman
    resultDisplay.textContent = `Result: ${result.toFixed(2)}`;
    explanationDisplay.textContent = explanation;

    // Menggunakan innerHTML untuk menampilkan rumus yang diformat sebagai HTML
    calculationDisplay.innerHTML = calculation;

    // Memastikan section hasil ditampilkan
    resultSection.style.display = 'block';
});
