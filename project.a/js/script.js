const qna = document.querySelector('#qna')
const result = document.querySelector('#result')
const fkresult = document.querySelector('#fkresult')
const main = document.querySelector('#main');
const blo = document.querySelector('.blo');
const endpoint = 15;
let ran = 0;
let sqa = 0;
let fkre = 0;

qna.style.display = 'none';
result.style.display = 'none';
fkresult.style.display = 'none';

function status() {
    var sta = document.querySelector('#status')
    sta.style.height = (137/endpoint)*(sqa+1)+'px';
}

function qpage(wq) {
    var qblo = document.querySelector('#qblo');
    if (wq < 2) {
        ran = Math.floor(Math.random() * 3);
        qblo.innerHTML = queanw[wq].dumq[ran].que;
        for(let i = 0; i<queanw[wq].dumq[ran].duma.length ; ++i) {
        ranpage(wq, i, ran);
    }
    } else {
    qblo.innerHTML = queanw[wq].que;
    for(let i = 0; i<queanw[wq].rela.length ; ++i) {
        anpage(wq, i);
    }
    }
    qblo.classList.add('mx-auto');
    qblo.classList.add('py-3');
    qblo.classList.add('my-5');
}

function anpage(wq, wa) {
    var anblo = document.querySelector('#anblo');
    var anbut = document.createElement('button');
    anbut.style.display = 'block';
    anbut.classList.add('kill');
    anbut.classList.add('mx-auto');
    anbut.classList.add('my-4');
    anbut.classList.add('p-2');
    anbut.innerHTML = queanw[wq].rela[wa].anw
    anblo.appendChild(anbut);
    anbut.addEventListener("click", function(){
        var k = document.querySelectorAll('.kill');
        for (var i=0; i<k.length; i++){
        k[i].disabled = "true";
        }
        nebef();
    }, false);
} 

function ranpage(wq, wa) {
    var anblo = document.querySelector('#anblo');
    var anbut = document.createElement('button');
    anbut.style.display = 'block';
    anbut.classList.add('kill');
    anbut.classList.add('mx-auto');
    anbut.classList.add('my-4');
    anbut.classList.add('p-2');
    anbut.innerHTML = queanw[wq].dumq[ran].duma[wa].anw
    anblo.appendChild(anbut);
    anbut.addEventListener("click", function(){
        var k = document.querySelectorAll('.kill');
        for (var i=0; i<k.length; i++){
        k[i].disabled = "true";
        }
        fkre = queanw[wq].dumq[ran].duma[wa].fkty
        if(fkre > 0) {
            fkne();
        } else {
            nebef()
        };
    }, false);
} 

function start() {
    main.classList.add('animate__animated')
    main.classList.add('animate__backOutLeft');
    setTimeout(() => {
    main.style.display = 'none';
    qna.style.display = 'block';
    next();
    qna.classList.add('animate__animated');
    qna.classList.add('animate__backInRight');
    }, 500)
}

function nebef() {
    var k = document.querySelectorAll('.kill');
    blo.classList.add('animate__animated');
    blo.classList.add('animate__backOutLeft');
    setTimeout(() => {
        blo.classList.remove('animate__backOutLeft');
        for (var i=0; i<k.length; i++){
        k[i].style.display = "none";
        }
        next();
        blo.classList.add('animate__animated');
        blo.classList.add('animate__backInRight');
    }, 500);
} 

function next() {
    qpage(sqa);
    console.log(sqa);
    status();
    sqa += 1;
}

function fkne() {
    qna.classList.add('animate__animated')
    qna.classList.add('animate__backOutLeft');
    setTimeout(() => {
    qna.style.display = 'none';
    fkresult.style.display = 'block';
    fkcom();
    fkresult.classList.add('animate__animated');
    fkresult.classList.add('animate__backInRight');
    }, 500)
}

function fkcom() {
    var fkname = document.querySelector('#fkname')
    var fkp = document.querySelector('#fkp')
    var fkimg = document.querySelector('#fkimg')
    fkname.innerHTML = fkall[fkre].name
    fkp.innerHTML = fkall[fkre].exp
    fkimg.src = "img/fkimg-"+fkre+".svg"
}

