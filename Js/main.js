let screenInput = document.querySelector('.screenInput');
let screenOutput = document.querySelector('.screenOutput');
let buttons = document.querySelectorAll('.btn');
let actionBtns = document.querySelectorAll('.actionBtns')


// buttons.forEach(function (button) {
//     screenInput.value += btn.textContent;
//     screenInput.value += this.textContent;
// })


buttons.forEach(button => {
    button.addEventListener('click', calculate);
})

function calculate() {
    if (this.textContent == '=') {
        result = eval(screenInput.value)
        screenOutput.value = result
        enableAllActionBtn()
    }

    else if (this.textContent == 'DEL' && screenOutput.value != '') {
        screenOutput.value = screenOutput.value.slice(0, -1);
    }

    else if (this.textContent == 'DEL' && screenOutput.value == '') {
        screenInput.value = screenInput.value.slice(0, -1);
    }
    else if (this.textContent == 'AC') {
        screenInput.value = ''
        screenOutput.value = ''
    }
    // else if (this.textContent == '/' || this.textContent == '*' || this.textContent == '+' || this.textContent == '-') {

    // }
    else {
        screenInput.value += this.textContent;
        enableAllActionBtn()
    }


};

actionBtns.forEach(item => {
    item.addEventListener('click', disableAllActionBtn);

})

function disableAllActionBtn() {
    actionBtns.forEach(item => {
        item.style.pointerEvents = 'none';
    })
}

function enableAllActionBtn() {
    actionBtns.forEach(item => {
        item.style.pointerEvents = 'all';
    })
}


document.onload = loadFunction();

function loadFunction() {
    actionBtns.forEach(item => {
        if (item.textContent == '-') {
            item.style.pointerEvents = 'all';
        } else {
            item.style.pointerEvents = 'none';
        }
    })
}