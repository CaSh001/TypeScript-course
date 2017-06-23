import ArrayUtilities from './arrayUtils.js' //hiba lesz amíg nem létezik, de .js-ként kell

    let array1 = [
        1,
        2,
        3,
        4,
        5
    ];
    let array2 = [
        6,
        7,
        8,
        9,
        10
    ];
    function callArrayUtil(util, array, array2 = null) {
    document.getElementById("output").innerHTML = ArrayUtilities[util](array, array2).toString()

for (let property in ArrayUtilities) { //minden gombra add egy onclick funkciót. Property az az arrayutilities cuccai. Nice.
    document.getElementById(property).onclick = function() {
        callArrayUtil(property, array1, array2)
    }
}

}
document.getElementById("output").innerHTML = array1.toString();