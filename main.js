const cientificSwitch = document.getElementById("switch");
cientificSwitch.addEventListener("change", function() {
    cube2 = document.getElementsByClassName('cube2');
    cube = document.querySelector('.primaryCube');
    if (currentClass == 'show-front') {
        showClass = 'show-right';
        cube.classList.remove(currentClass);
        cube.classList.add(showClass);
        currentClass = 'show-right';
        showClass2 = 'show-top';
        for (let i = 0; i < cube2.length; i++) {
            cube2[i].classList.remove(currentClass2);
            cube2[i].classList.add(showClass2);
        };
        currentClass2 = 'show-top';
        document.getElementById('painel').disabled = false;
        document.getElementById('painel').setAttribute('style', 'background-color: rgba(255, 255, 255, 0.800)');
        reset()
    } else {
        showClass = 'show-front';
        cube.classList.remove(currentClass);
        cube.classList.add(showClass);
        currentClass = 'show-front';

        showClass2 = 'show-front';
        for (let i = 0; i < cube2.length; i++) {
            cube2[i].classList.remove(currentClass2);
            cube2[i].classList.add(showClass2);
        }
        currentClass2 = 'show-front'
        document.getElementById('painel').disabled = true;
        document.getElementById('painel').setAttribute('style', 'background-color: rgba(255, 255, 255, 0.579)');
        reset()
    }
});

const btEquals = document.getElementById("btEquals")
btEquals.addEventListener("click", function() {
    console.log(numberX, mathOperation, numberY)
    result = eval(numberX + mathOperation + numberY);
    XorY = false
    numberX = result
    document.getElementById('painel').value = result
});
const btEquals2 = document.getElementById("btEquals2")
btEquals2.addEventListener("click", function() {
    numberX = document.getElementById('painel').value
    numberY = document.getElementById('numberY').value
    var x, y;
    x = translate(functionsOperations, typeNumberX, numberX)
    y = translate(functionsOperations, typeNumberY, numberY)
    result = eval(x + mathOperation + y);
    typeResult = typeNumberX;
    result = translate(functionsResult, typeNumberX, result)
    document.getElementById('result').value = result;
});

function translate(array, type, num) {
    for (let i = 0; i < 4; i++) {
        if (i == type) {
            x = array[i](num);
            if (type != 3) {
                x = parseInt(x);
            }
        };
    };
    return x
};

function translateResult(type) {
    var y, x;
    x = document.getElementById('result').value;
    y = translate(functionsOperations, typeResult, x);
    y = translate(functionsResult, type, y);
    typeResult = type;
    document.getElementById('result').value = y;
    console.log(mathOperation)
}

function reset() {
    document.getElementById('painel').value = "";
    document.getElementById('numberY').value = "";
    document.getElementById('result').value = "";
    numberX = "";
    numberY = "";
    result = "";
    typeNumberX = "";
    typeNumberY = "";
    mathOperation = "";
    XorY = false;
};

function operation(parameter, cntfCalc) {
    if (cntfCalc == false) {
        document.getElementById('painel').value = "";
        XorY = true;
    }
    mathOperation = parameter
};

function setNumber(parameter) {
    document.getElementById('painel').value += parameter;
    if (XorY == false) {
        numberX = document.getElementById('painel').value;
    } else {
        numberY = document.getElementById('painel').value;
    }
};


var functionsResult = [
    function(numberX) {
        return (numberX.toString(2));
    },
    function(numberX) {
        return (numberX.toString(8));
    },
    function(numberX) {
        return numberX
    },
    function(numberX) {
        return (numberX.toString(16));
    }
];
var functionsOperations = [
    function(numberX) {
        return (parseInt(numberX, 2));
    },
    function(numberX) {
        return (parseInt(numberX, 8));
    },
    function(numberX) {
        return (numberX);
    },
    function(numberX) {
        return (parseInt(numberX, 16));
    }
]
var numberX;
var numberY;
var result;
var typeNumberX;
var typeNumberY;
var typeResult;
var mathOperation;
var XorY = false;
var currentClass = 'show-front';
var currentClass2 = 'show-front';