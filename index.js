const input = document.getElementById("data-input")
const inputBTN = document.getElementById("input-btn")
const lenOut = document.getElementById("length-output")
const volOut = document.getElementById("volume-output")
const masOut = document.getElementById("mass-output")

const meter = 3.281
const liter = 0.264
const kilo = 2.204

inputBTN.addEventListener("click", convert)

function convert() {
    let num = Number(input.value)

    lenOut.textContent = `${num} meters = ${(num * meter).toFixed(3)} feet 
                        | ${num} feet = ${(num / meter).toFixed(3)} meters`

    volOut.textContent = `${num} liters = ${(num * liter).toFixed(3)} gallons 
                        | ${num} gallons = ${(num / liter).toFixed(3)} liters`

    masOut.textContent = `${num} kilograms = ${(num * kilo).toFixed(3)} pounds 
                        | ${num} pounds = ${(num / kilo).toFixed(3)} kilograms`
}

/* just for dark theme */

let icon = document.getElementById("icon")

icon.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")) {
        icon.src = "images/dark.png"
    } else {
        icon.src = "images/light.png"
    }
})