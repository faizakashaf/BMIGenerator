
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const result = document.querySelector(".result")
const measureBtn = document.querySelector(".measureBtn");
const bmiStatus = document.querySelector("#bmiStatus");
const statusHeading = document.querySelector("h3");
const heightUnit = document.getElementById("heightunit");
let measure;
let selectedValue;

heightUnit.addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex];
    selectedValue = selectedOption.value;
});
// console.log(selectedValue) 

function calculateBmi(wgt, hgt, unit) {
    if (unit == "cm") {
        measure = (Number((wgt) / (hgt / 100) ** 2)).toFixed(2);
    }
    else if (unit == "m") {
        measure = (Number((wgt) / (hgt / 100) ** 2)).toFixed(2);

    }
    else if (unit == "feet") {
        measure = (Number((wgt) / (hgt * 0.3048) ** 2)).toFixed(2);

    }
    else if (unit == "inch") {
        measure = (Number((wgt) / (hgt * 0.0254) ** 2)).toFixed(2);

    }
}


measureBtn.addEventListener("click", function () {

    if (weight.value == "" || height.value == "" || selectedValue== null) {
        alert("Please fill the inputs")
    }
    else {
        calculateBmi(weight.value, height.value, selectedValue)
        result.innerHTML = "Result: " + measure + " " + "kg/m<sup>2</sup>";
        result.style.display = "block";

        if (measure < 18.5) {
            bmiStatus.innerHTML = "Underweight \u{1F61F}";

        }
        else if (measure >= 18.5 && measure <= 25.9) {
            bmiStatus.innerHTML = "Healthy weight \u{1F603}";

        }
        else if (measure >= 26 && measure <= 29.9) {
            bmiStatus.innerHTML = "Overweight \u{1F642}";
        }
        else if (measure >= 30 && measure <= 40) {
            bmiStatus.innerHTML = "Obesity \u{1F62E}";
        }
        else if (measure >= 40) {
            bmiStatus.innerHTML = "Severe Obesity \u{1F630}";
        }
        statusHeading.style.display = "block";

    }

})

function validateNum(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}
