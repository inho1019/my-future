const sbut = document.querySelector(".sbut");
const ststr = document.querySelector(".ststr");
const stsec = document.querySelector(".start");

let stt = 0;
let twn = 0;

const seaso = new Audio('seasound.mp3');

    seaso.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false)

function start() {
    sbut.style.animation = "byebut 4s";
    setTimeout(() => {
        sbut.style.display = "none";
        sttext(stt);
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
        stsec.style.paddingBottom = "35%";
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
        twbtcho[i].classList.add("animate__animated");
        twbtcho[i].classList.add("animate__fadeOut");
        twbtcho[i].disabled = true;
        }
        setTimeout(() => {
            stsec.style.paddingBottom = "30%";
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
            } else {
                stsec.style.paddingBottom = "50%";
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
    }
        }, 4000);
}