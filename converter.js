let input_value = document.querySelector("#input_value");
let calculatorAnswer = document.querySelector("#calculatorAnswer");
let convertFrom = document.querySelector("#convertFrom");
let convertTo = document.querySelector("#convertTo");
let calculateBtn = document.querySelector("#calculateBtn");
let clearBtn = document.querySelector("#clearBtn");



let converter = new Converter()

calculateBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (Math.sign(input_value.value) == -1)  return
    
    if (input_value.value) {
        console.log(converter)
        console.log(converter.convertKmToM(input_value.value))
        calculateType(`${convertFrom.value}/${convertTo.value}`)
    }
 
})

function calculateType(type) {
    console.log(type)
    switch (type) {
        case "kilometer/meter":
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertKmToM(input_value.value)}`
            break;
        case 'meter/kilometer':
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertMToKm(input_value.value)}`
            break;
        case 'miles/kilometer':
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertMilesToKm(input_value.value)}`
            break;
        case 'kilometer/miles':
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertKmToMiles(input_value.value)}`
            break;
        case 'centimeter/meter':
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertCmToM(input_value.value)}`
            break;
        case 'meter/centimeter':
            calculatorAnswer.innerText = `convert kilometer to meter: ${converter.convertMToCm(input_value.value)}`
            break;
        default:

    }
}



clearBtn.addEventListener("click", function () {
    input_value.value = ""
    calculatorAnswer.innerText = ""
  
})