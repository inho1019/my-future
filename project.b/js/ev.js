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
        stsec.style.paddingBottom = "20%";
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
        stsec.style.paddingBottom = "30%";
        }, 2900);
    } else {
    setTimeout(() => { 
        if (hg > hf) {
        heartf.style.animation = "fadeout 3s"
        hearta.style.animation = "fadeout 3s"
        setTimeout(() => { 
             hgage.style.display="none"
             mermatxt(mer)
            stsec.style.paddingBottom = "30%";
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
        stsec.style.paddingBottom = "45%";
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
        mer = 0;
    }
        }, 4000);
}




//