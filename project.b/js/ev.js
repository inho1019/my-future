//고래
const whbutton = document.querySelector(".whbut")
const ocone = document.querySelectorAll(".ocean")
const octwo = document.querySelector(".ocle")
const octhr = document.querySelector(".ocri")
whbutton.style.display = "none"

let wht = 0 

function whalenx() {
    whaletxs(wht);
    whbutton.style.animation = "byebut 2s"
    //whbutton.disabled = true;
        setTimeout(() => { 
        mkwhale();
        whbutton.style.display = "none"
        }, 1900);
}

function mkwhale() {
    whale.style.display = "block";
    whale.style.animation = "whale 10s";
    setTimeout(() => {
        octwo.style.borderRadius = "38%"
        octhr.style.borderRadius = "38%"
        octwo.style.animationDuration = "6s"
        octhr.style.animationDuration = "6s"
        for (i = 0;i < ocone.length; ++i) {
            ocone[i].style.borderRadius = "38%"
            ocone[i].style.animationDuration = "6s"
        }
        setTimeout(() => {
            octwo.style.borderRadius = "43%"
            octhr.style.borderRadius = "43%"
            octwo.style.animationDuration = "20s"
            octhr.style.animationDuration = "20s"
            for (i = 0;i < ocone.length; ++i) {
                ocone[i].style.borderRadius = "45%"
                ocone[i].style.animationDuration = "16s"
            }
            }, 6800);
            }, 7000);
    setTimeout(() => { 
        whale.style.display = "none";
            }, 9500);
}

function whaletxf(a) {
    ststr.innerHTML = whtxf[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    wht += 1;
    setTimeout(() => {
    if (wht < whtxf.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             whaletxf(wht);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        wht = 0;
        stsec.style.paddingBottom = "30%";
        whbutton.style.display = "block"
    }
        }, 4000);
}

function whaletxs(a) {
    ststr.innerHTML = whtxs[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    wht += 1;
    setTimeout(() => {
    if (wht < whtxs.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             whaletxs(wht);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        wht = 0;
    }
        }, 4000);
}
//인어
const heartg = document.querySelector(".status")
const heartf = document.querySelector(".heart")
const hearta = document.querySelector(".heartfull")

let mer = 0;

function heartgagedw() {
    var hg = heartg.clientHeight 
    var hf = heartf.clientHeight * 0.9
if (hg < hf * 0.02) {
    heartf.style.animation = "fadeout 3s"
    hearta.style.animation = "fadeout 3s"
    setTimeout(() => { 
        hgage.style.display="none"
        mermatxs(mer)
        stsec.style.paddingBottom = "40%";
        }, 2900);
    } else {
    setTimeout(() => { 
        if (hg > hf) {
        heartf.style.animation = "fadeout 3s"
        hearta.style.animation = "fadeout 3s"
        setTimeout(() => { 
             hgage.style.display="none"
             mermatxt(mer)
            stsec.style.paddingBottom = "40%";
        }, 2900);
        } else {
        hg = heartg.clientHeight 
        hf = heartf.clientHeight * 0.9
        heartg.style.height = hg-(hf*0.01)+'px';
        heartgagedw();
        }
        }, 100);
    }
}
function heartgageup() {
    var hg = heartg.clientHeight 
    var hf = heartf.clientHeight * 0.9
    heartg.style.height = hg+(hf*0.08)+'px';
    }

function hst() {
    hgage.style.display="block"
    hgage.style.opacity="0"
    setTimeout(() => { 
        hgage.style.opacity="1"
        heartgagedw()
                           }, 1000);
}

function mermatxf(a) {
    ststr.innerHTML = mermatx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    mer += 1;
    setTimeout(() => {
    if (mer < mermatx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             mermatxf(mer);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        mer = 0;
        stsec.style.paddingBottom = "50%";
        hst()
    }
        }, 4000);
}
function mermatxs(a) {
    ststr.innerHTML = mermatxx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    mer += 1;
    setTimeout(() => {
    if (mer < mermatxx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             mermatxs(mer);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        mer = 0;
    }
        }, 4000);
}
function mermatxt(a) {
    ststr.innerHTML = mermatxo[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    mer += 1;
    setTimeout(() => {
    if (mer < mermatxo.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             mermatxt(mer);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        mer = 0;
    }
        }, 4000);
}
//돌고래
const dolphin = document.querySelector('.dolphins')
const dlbu = document.querySelector('.dlbu')
let dlpm = 0;
let dlp = 0;
let dlnum = 0;

function mkdolphin () {
    stsec.style.transition = "0s";
    stsec.style.paddingBottom = "34.5%";
    if(dlpm === 10) { 
        dlbu.style.display = "block";
        setTimeout(() => { 
            dlbu.style.display = "none";
            if (dlnum < 10) {
            deldlp()
            }
            }, 10000);
                    } else {
    var dlph = document.createElement('img');
    dlph.classList.add("dlph")
    dlph.setAttribute("src", "img/dolphin.png");
    dlph.style.transition = "3s ease-out";
    dolphin.appendChild(dlph);
    dlpm += 1;    
    dlph.style.left = getRandomArbitrary(9, 45) + "%";
        setTimeout(() => { 
             mkdolphin ();
                           }, 750);
    }
}

function deldlp() {
    var hwdl = document.querySelectorAll('.dlph')
    if (dlnum < 10) {
    hwdl[dlnum].style.opacity = "0"
    dlnum += 1;
    setTimeout(() => { 
            deldlp();
                           }, 1000);
    } else {
        setTimeout(() => {
        for (i = 0;i < hwdl.length; ++i) {
        hwdl[i].style.display = "none"
        }
        stsec.style.transition = "1.5s ease-in-out";
        stsec.style.paddingBottom = "40%";
        dlphtxt(dlp);
        }, 2000);
    }
}


function tchdlp() {
    var hwdl = document.querySelectorAll('.dlph')
    if (dlnum < 10) {
    hwdl[dlnum].style.animation = "dlkill 3s"
    dlnum += 1;
    } else {
        dlbu.style.display = "none";
        setTimeout(() => { 
             dlphtxs(dlp);
            for (i = 0;i < hwdl.length; ++i) {
            hwdl[i].style.display = "none"
            }
            stsec.style.transition = "1.5s ease-in-out";
            stsec.style.paddingBottom = "40%";
                           }, 2000);
    }
}

function dlphtxf(a) {
    ststr.innerHTML = dolphintx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    dlp += 1;
    setTimeout(() => {
    if (dlp < dolphintx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             dlphtxf(dlp);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        setTimeout(() => { 
            ststr.classList.remove("animate__fadeIn");
            ststr.classList.add("animate__animated");
            ststr.classList.add("animate__fadeOut");
                           }, 4000);
        mkdolphin ();
        dlp = 0;
    }
        }, 4000);
}
function dlphtxs(a) {
    ststr.innerHTML = dolphintxx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    dlp += 1;
    setTimeout(() => {
    if (dlp < dolphintxx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             dlphtxs(dlp);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        dlp = 0;
    }
        }, 4000);
}
function dlphtxt(a) {
    ststr.innerHTML = dolphintxo[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    dlp += 1;
    setTimeout(() => {
    if (dlp < dolphintxo.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             dlphtxt(dlp);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        dlp = 0;
    }
        }, 4000);
}
//