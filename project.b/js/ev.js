const evloc = document.querySelector('.evloc')
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
    whbutton.disabled = true;
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
        boat.style.marginBottom = "-44%"
        for (i = 0;i < ocone.length; ++i) {
            ocone[i].style.borderRadius = "38%"
            ocone[i].style.animationDuration = "6s"
        }
        setTimeout(() => {
            octwo.style.borderRadius = "43%"
            octhr.style.borderRadius = "43%"
            octwo.style.animationDuration = "20s"
            octhr.style.animationDuration = "20s"
            boat.style.marginBottom = "-42.5%"
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
const dlbu = document.querySelector('.dlbu')
let dlpm = 0;
let dlp = 0;
let dlnum = 0;

function mkdolphin () {
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
    evloc.appendChild(dlph);
    dlpm += 1;    
    dlph.style.left = getRandomArbitrary(9, 85) + "%";
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
//바위섬
let stn = 0;

const stone = document.querySelector(".stone")
const lbut = document.querySelector(".lbut")
const rbut = document.querySelector(".rbut")
const cbut = document.querySelector(".cbut")

function stonetxs(a) {
    ststr.innerHTML = stonetx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    stn += 1;
    setTimeout(() => {
    if (stn < stonetx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             stonetxs(stn);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        mkstone();
        stn = 0;
    }
        }, 4000);
}

function mkstone() {
    stone.style.display = "block";
    setTimeout(() => { 
    lbut.style.display = "block";
    rbut.style.display = "block";
    cbut.style.display = "block";
        }, 3400)
}

function lbutc() {
    lbut.style.display = "none";
    rbut.style.display = "none";
    cbut.style.display = "none";
    stone.style.animation = "stonec 5s"
    lbuttx(stn);
    setTimeout(() => { 
             stone.style.display = "none";
                           }, 3500);
}

function lbuttx(a) {
    ststr.innerHTML = stonetxb[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    stn += 1;
    setTimeout(() => {
    if (stn < stonetxb.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             lbuttx(stn);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        stn = 0;
    }
        }, 4000);
}
function rbutc() {
    lbut.style.display = "none";
    rbut.style.display = "none";
    cbut.style.display = "none";
    stone.style.animation = "stoneb 5s"
    rbuttx(stn);
    setTimeout(() => { 
             stone.style.display = "none";
                           }, 3500);
}

function rbuttx(a) {
    ststr.innerHTML = stonetxa[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    stn += 1;
    setTimeout(() => {
    if (stn < stonetxa.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             rbuttx(stn);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        stn = 0;
    }
        }, 4000);
}
function cbutc() {
    lbut.style.display = "none";
    rbut.style.display = "none";
    cbut.style.display = "none";
    stone.style.animation = "stoned 20s"
    cbuttx(stn);
}
function cbuttx(a) {
    ststr.innerHTML = stonetxc[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    stn += 1;
    setTimeout(() => {
    if (stn < stonetxc.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             cbuttx(stn);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        lbut.style.display = "block";
        rbut.style.display = "block";
        stn = 0;
    }
        }, 4000);
}
//상어
let shk = 0;
let she = 0;

const shbut = document.querySelector(".shbut")
const sailbut = document.querySelector(".sailbut")

function mkshark() {
    var shph = document.createElement('img');
    shph.classList.add("shph")
    shph.setAttribute("src", "img/shark.png");
    shph.classList.add("mx-auto")
    evloc.appendChild(shph);
    stsec.style.paddingBottom = "30%";
    setTimeout(() => { 
        shbut.style.display = "block";
        sailbut.style.display = "block";
            }, 3000);
}
function shatt() {
    shbut.style.display = "none";
    sailbut.style.display = "none";
    shtxs(shk);
    shatef();
    var shph = document.querySelector(".shph")
    shph.style.animation = "shat 4s infinite"
    setTimeout(() => { 
        shph.style.transition = "3s ease-out";
        shph.style.opacity = "0";
            setTimeout(() => { 
            shph.style.display = "none";
                }, 3000);
            }, 12000);
}
function shmove() {
    shbut.style.display = "none";
    sailbut.style.display = "none";
    shtxt(shk);
    var shph = document.querySelector(".shph")
    shph.style.animation = "shmv 16s"
    setTimeout(() => { 
        shph.style.display = "none";
            }, 16000);
}
function shatef() {
    if (she < 18) {
    var shef = document.createElement('img');
    shef.classList.add("shef")
    shef.setAttribute("src", "img/sharkat.png");
    shef.classList.add("mx-auto")
    evloc.appendChild(shef);
    she += 1;
    shef.style.left = getRandomArbitrary(35, 60) + "%";
        setTimeout(() => { 
            shatef();
            shef.style.opacity = 0;
            }, 750);
        setTimeout(() => { 
            shef.style.display = "none";
            }, 2000);
    }
}
function shtxf(a) {
    ststr.innerHTML = sharktxf[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    shk += 1;
    setTimeout(() => {
    if (shk < sharktxf.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             shtxf(shk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        mkshark();
        shk = 0;
    }
        }, 4000);
}
function shtxs(a) {
    ststr.innerHTML = sharktxs[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    shk += 1;
    setTimeout(() => {
    if (shk < sharktxs.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             shtxs(shk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        shk = 0;
    }
        }, 4000);
}
function shtxt(a) {
    ststr.innerHTML = sharktxt[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    shk += 1;
    setTimeout(() => {
    if (shk < sharktxt.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             shtxt(shk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        shk = 0;
    }
        }, 4000);
}
//크라켄
let krk = 0;
let mkk = 0;
let kkk = 0;

function mkkrs() {
    if (mkk < 25) {
        var ran = Math.floor(Math.random() * 2);
        if (ran === 0) {
            mkkrakenf();
        } else {
            mkkrakens();
        }
        mkk += 1;
        setTimeout(() => { 
            mkkrs()
                           }, 1250);
    } else {
        if (kkk < 15) {
            krtxt(krk);
        } else {
            krtxs(krk);
        }
    }
} 
function mkkrakenf() {
    var krph = document.createElement('img');
    var krbut = document.createElement('button');
    krph.classList.add("krphf")
    krph.setAttribute("src", "img/kraken.png");
    krph.classList.add("mx-auto")
    krph.style.left = getRandomArbitrary(25, 65) + "%";
    evloc.appendChild(krph);
    setTimeout(() => { 
        krbut.classList.add("krbut")
        krbut.style.left = krph.style.left
        evloc.appendChild(krbut);
        krbut.addEventListener("click", function(){
            krbut.style.display = "none";
            krph.style.transition = "1s ease-out";
            krph.style.opacity = "0";
            kkk += 1;
            setTimeout(() => { 
            krph.style.display = "none"
                           }, 1000);
        }, false);
        setTimeout(() => { 
            krbut.style.display = "none"
                           }, 2500);
                           }, 1000);
    setTimeout(() => { 
        krph.style.display = "none";
                           }, 6000);
}
function mkkrakens() {
    var krph = document.createElement('img');
    var krbut = document.createElement('button');
    krph.classList.add("krphs")
    krph.setAttribute("src", "img/kraken.png");
    krph.classList.add("mx-auto")
    krph.style.left = getRandomArbitrary(25, 65) + "%";
    evloc.appendChild(krph);
    setTimeout(() => { 
        krbut.classList.add("krbut")
        krbut.style.left = krph.style.left
        evloc.appendChild(krbut);
        krbut.addEventListener("click", function(){
            krbut.style.display = "none";
            krph.style.transition = "1s ease-out";
            krph.style.opacity = "0";
            kkk += 1;
            setTimeout(() => { 
            krph.style.display = "none"
                           }, 1000);
        }, false);
        setTimeout(() => { 
            krbut.style.display = "none"
                           }, 2500);
                           }, 1000);
    setTimeout(() => { 
        krph.style.display = "none";
                           }, 6000);
}
function krtxf(a) {
    ststr.innerHTML = krakentxf[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    krk += 1;
    setTimeout(() => {
    if (krk < krakentxf.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             krtxf(krk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        mkkrs();
        krk = 0;
    }
        }, 4000);
}
function krtxs(a) {
    ststr.innerHTML = krakentxs[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    krk += 1;
    setTimeout(() => {
    if (krk < krakentxs.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             krtxs(krk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        krk = 0;
    }
        }, 4000);
}
function krtxt(a) {
    ststr.innerHTML = krakentxt[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    krk += 1;
    setTimeout(() => {
    if (krk < krakentxt.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             krtxt(krk);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        krk = 0;
    }
        }, 4000);
}
//세이렌
let sia = 0;
let ksi = 0;
let sit = 0;

function mksiren () {
    var siren = document.createElement('img');
    siren.classList.add("siren")
    siren.setAttribute("src", "img/siren.png");
    siren.classList.add("mx-auto")
    stsec.appendChild(siren);
    setTimeout(() => { 
        siren.style.opacity = "1";
    }, 500);
    setTimeout(() => { 
        sirenatt();
    }, 3000);
}
function sirenatt() {
    var siren = document.querySelector(".siren");
    if (sia < 50) {
        var siat = document.createElement('img');
        var sibo = document.createElement('button')
        siat.classList.add("siat")
        var ran = Math.floor(Math.random() * 3);
        siat.setAttribute("src", "img/note" + ran + ".png");
        siat.classList.add("mx-auto")
        stsec.appendChild(siat);
        sia += 1;
        setTimeout(() => { 
            siat.style.left = getRandomArbitrary(35, 60) + "%";
            siat.style.marginTop = "65%"
        }, 100);
        setTimeout(() => { 
            sirenatt();
        }, 500);
        setTimeout(() => { 
            sibo.classList.add("sibo")
            stsec.appendChild(sibo);
            sibo.style.left = siat.style.left
            if (sibo.style.left > 52 + "%") {
                sibo.style.transform = "rotate(-20deg)"
            }
            if (sibo.style.left < 42 + "%") {
                sibo.style.transform = "rotate(20deg)"
            }
            sibo.addEventListener("mouseover", function(){
                siat.style.display = "none";
                sibo.style.display = "none";
                ksi += 1;
            }, false);
            sibo.addEventListener("click", function(){
                siat.style.display = "none";
                sibo.style.display = "none";
                ksi += 1;
            }, false);
        }, 1500);
        setTimeout(() => { 
            sibo.style.display = "none";
        }, 2500);
        setTimeout(() => { 
            siat.style.display = "none";
        }, 3500);
    } else {
        setTimeout(() => { 
            siren.style.opacity = "0";
            setTimeout(() => { 
                siren.style.display = "none";
                if (ksi < 30) {
                    srtxt(sit);
                } else {
                    srtxs(sit);
                }
            }, 2000);
    }, 3000);
    }
}
function srtxf(a) {
    ststr.innerHTML = sirentxf[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    sit += 1;
    setTimeout(() => {
    if (sit < sirentxf.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             srtxf(sit);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        mksiren();
        sit = 0;
    }
        }, 4000);
}
function srtxs(a) {
    ststr.innerHTML = sirentxs[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    sit += 1;
    setTimeout(() => {
    if (sit < sirentxs.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             srtxs(sit);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        sit = 0;
    }
        }, 4000);
}
function srtxt(a) {
    ststr.innerHTML = sirentxt[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    sit += 1;
    setTimeout(() => {
    if (sit < sirentxt.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             srtxt(sit);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        passivef();
        sit = 0;
    }
        }, 4000);
}