const sbut = document.querySelector(".sbut");
const ststr = document.querySelector(".ststr");
const stsec = document.querySelector(".start");
const ocsec = document.querySelector(".allocean");
const whale = document.querySelector(".whale")
const boat = document.querySelector(".boat")
const topsec = document.querySelector(".topsec")
const hgage = document.querySelector(".hgage")

let event = [21,21,21,21,21,21,21,21,21,21];
let eventcount = 0;
let stt = 0;
let twn = 0;
let tht = 0;
let frt = 0;

hgage.style.display = "none"

const seaso = new Audio('seasound.mp3');

seaso.addEventListener('timeupdate', function(){
    var buffer = .44
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
function vlup (a) {
    if (a.volume > 0.5) {
    } else { 
    setTimeout(() => {
        a.volume += 0.05;
        vlup(a);
            }, 200)
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }


function start() {
    sbut.disabled = true;//주석으로 버튼 연타
    sbut.style.animation = "byebut 4s";
    setTimeout(() => {
        sbut.style.display = "none";
        sttext(stt);//버튼 스타트 지점
        }, 4000);
}

function sttext(a) {
    ststr.innerHTML = sttexto[a]; 
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    stt += 1;
    setTimeout(() => {
    if (stt < sttexto.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             sttext(stt);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        setTimeout(() => {
        stsec.style.paddingBottom = "45%";
            for (let i = 0;i < twbuttx.length; ++i) {
                twobut(i);
            }
        }, 1000);
    }
        }, 4000);
}

function twobut(tw) {
    var twbt = document.createElement('button');
    twbt.classList.add('twbt');
    twbt.style.setProperty('--animate-duration', '2s');
    twbt.classList.add("animate__animated");
    twbt.classList.add("animate__fadeIn");
    twbt.style.top= tw*40+"%";
    twbt.innerHTML = twbuttx[tw]
    stsec.appendChild(twbt);
    twbt.addEventListener("click", function(){
        var twbtcho = document.querySelectorAll('.twbt')
        for (let i = 0;i < twbtcho.length; ++i) {
        twbtcho[i].classList.remove("animate__fadeIn");
        twbtcho[i].style.setProperty('--animate-duration', '1.5s');
        twbtcho[i].classList.add("animate__animated");
        twbtcho[i].classList.add("animate__fadeOut");
        twbtcho[i].disabled = true;
        }
        setTimeout(() => {
            for (let i = 0;i < twbtcho.length; ++i) {
                twbtcho[i].style.display = "none";
            }
            stsec.style.paddingBottom = "40%";
            twbutnext(tw,twn)
        }, 2000);
    }, false);
}

function twbutnext(a,b) {
    ststr.innerHTML = twbutnx[a].aa[b]; 
    ststr.classList.remove("animate__fadeOut")
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    twn += 1;
    setTimeout(() => {
    if (twn < twbutnx[a].aa.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        if (twn === 1) {
            if (a === 0) {
                seaso.play();
                seaso.volume = 0;
                vlup(seaso);
            } else {
                stsec.style.paddingBottom = "60%";
                star.classList.add("animate__animated");
                star.classList.add("animate__fadeIn");
                star.style.setProperty('--animate-duration', '2s');
                init();
            }
        }
         setTimeout(() => { 
             twbutnext(a,twn);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        setTimeout(() => {
            thrtext(tht,a);
        }, 2500);
    }
        }, 4000);
}

function thrtext(a,b) {
    ststr.innerHTML = thrtx[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    tht += 1;
    setTimeout(() => {
    if (tht < thrtx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             thrtext(tht,b);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        setTimeout(() => {
        if (b === 0) {
                stsec.style.paddingBottom = "10%";
            } else {
                stsec.style.paddingBottom = "60%";
            }
            ocsec.style.animation = "fadeio 12s";
            topsec.style.animation = "fadeio 12s";
            boat.style.opacity = "0.5";
            setTimeout(() => {
                setTimeout(() => {
                    boat.style.opacity = "1"
                    }, 5000);
            frtext(frt);
            }, 5000);
        }, 1000);
    }
        }, 4000);
}

function frtext(a) {
    ststr.classList.remove("animate__fadeOut");
    ststr.innerHTML = frtx[a]; 
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    frt += 1;
    setTimeout(() => {
    if (frt < frtx.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             frtext(frt);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        setTimeout(() => {
            stsec.style.paddingBottom = "40%";
            setTimeout(() => {
            var h1 = document.querySelector("h1")
            h1.style.opacity = "0";
            ranev();//이벤트 발생 지점
                }, 2000);
        }, 1000);
    }
        }, 4000);
}

function ranev() {
    if (eventcount < 10) {
    var ran = Math.floor(Math.random() * 7);
    for (let i = 0; i < event.length; ++i){
        if (ran === event[i]) {
            ranev();
            return
        }
    }
        if (ran === 0) {
            mermatxf(mer);
            event[eventcount] = 0;
        }
        if (ran === 1) {
            whaletxf(wht);
            event[eventcount] = 1;
        }
        if (ran === 2) {
            dlphtxf(dlp);
            event[eventcount] = 2;
        }
        if (ran === 3) {
            stonetxs(stn);
            event[eventcount] = 3;
        }
        if (ran === 4) {
            sharktxf(shk);
            event[eventcount] = 4;
        }
        if (ran === 5) {
            krakentxf(krk);
            event[eventcount] = 5;
        }
        if (ran === 6) {
            sirentxf(sit);
            event[eventcount] = 6;
        }
        eventcount += 1;
    }
}
function passivef() {
    var c = Math.floor(Math.random() * 3);
    setTimeout(() => {
    ststr.classList.remove("animate__fadeOut");
    ststr.innerHTML = passive[c]; 
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    setTimeout(() => {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut"); 
        setTimeout(() => {
            ranev();
            }, 2000);
                           }, 8000);
    }, 3000);
}