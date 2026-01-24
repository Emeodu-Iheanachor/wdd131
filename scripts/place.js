// FOOTER DATES
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC WEATHER VALUES
const temperature = 30; // °C
const windSpeed = 10;   // km/h

// ONE-LINE WIND CHILL FUNCTION (METRIC)
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// APPLY CONDITIONS
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;
    // Change hamburger to X
    hamburger.textContent = isOpen ? "☰" : "✖";
