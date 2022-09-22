var flag = true;
window.addEventListener('load', init);

function init() {
    document.getElementById('one').addEventListener('click', doXorZero);
    document.getElementById('two').addEventListener('click', doXorZero);
    document.getElementById('three').addEventListener('click', doXorZero);
    document.getElementById('four').addEventListener('click', doXorZero);
    document.getElementById('five').addEventListener('click', doXorZero);
    document.getElementById('six').addEventListener('click', doXorZero);
    document.getElementById('seven').addEventListener('click', doXorZero);
    document.getElementById('eight').addEventListener('click', doXorZero);
    document.getElementById('nine').addEventListener('click', doXorZero);


let x = Math.floor((Math.random() * 100) + 1);
console.log('number is : ',x)
if (x % 2 == 0) {
    flag = true;
} else {
    flag = false
}
}

function doXorZero() {
    if (this.innerText == '') {
        if (flag == true) {
            this.innerText = 'X';
        } else {
            this.innerText = '0';
        }
        checkWinOrLoose();
        flag = !flag;
    }
}
function checkWinOrLoose() {
    WinOrLoose('one', 'two', 'three');
    WinOrLoose('four', 'five', 'six');
    WinOrLoose('seven', 'eight', 'nine');
    WinOrLoose('one', 'four', 'seven');
    WinOrLoose('two', 'five', 'eight');
    WinOrLoose('three', 'six', 'nine');
    WinOrLoose('one', 'five', 'nine');
    WinOrLoose('three', 'five', 'seven');
}

function WinOrLoose(first, second, third) {
    //123,456,789,147,258,369,159,357
    console.log('check');
    if (document.getElementById(first).innerText != ''
        && document.getElementById(second).innerText != ''
        && document.getElementById(third).innerText != '') {

        if (document.getElementById(first).innerText == document.getElementById(second).innerText
            && document.getElementById(first).innerText == document.getElementById(third).innerText){
            setTimeout(function () {
                alert("Game over "  + document.getElementById(first).innerText + ' is winner');
                clearAll();
            }, 50);
    }
}
}

function clearAll() {
    document.getElementById('one').innerText = '';
    document.getElementById('two').innerText = '';
    document.getElementById('three').innerText = '';
    document.getElementById('four').innerText = '';
    document.getElementById('five').innerText = '';
    document.getElementById('six').innerText = '';
    document.getElementById('seven').innerText = '';
    document.getElementById('eight').innerText = '';
    document.getElementById('nine').innerText = '';
}