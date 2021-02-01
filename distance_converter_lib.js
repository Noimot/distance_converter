
function Converter() {

}

Converter.prototype.convertKmToM = function (number) {
    return number * 1000;
}

Converter.prototype.convertMToKm = function (number) {
    return number / 1000;
}

Converter.prototype.convertMilesToKm = function (number) {
    return number * 1.609344;
}


Converter.prototype.convertKmToMiles = function (number) {
    return number / 1.609344;
}


Converter.prototype.convertCmToM = function (number) {
    return number / 100;
}


Converter.prototype.convertMToCm = function (number) {
    return number * 100;
}

Converter.prototype.clearBtn = function (number) {
   return number;
}


