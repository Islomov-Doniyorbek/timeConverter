let time = 4;
let units = {
    ms: {
        v: [
            1,
        ],
        u: [
            'millisekund',
        ]
    },
    s: {
        v: [
            100,
        ],
        u: [
            'millisekund',
        ]
    },
    min: {
        v: [
            6000,
            60,
        ],
        u: [
            'millisekund',
            'sekund',
        ]
    },
    h: {
        v: [
            360000,
            3600,
            60,
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
        ]
    },
    d: {
        v: [
            360000*24,
            3600*24,
            60*24,
            24
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
            'soat',
        ]
    },
    w: {
        v: [
            360000*24*7,
            3600*24*7,
            60*24*7,
            24*7,
            7
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
            'soat',
            'kun',
        ]
    },
    mth: {
        v: [
            360000*24*30,
            3600*24*30,
            60*24*30,
            24*30,
            30,
            4
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
            'soat',
            'kun',
            'hafta',
        ]
    },
    y: {
        v: [
            360000*24*365,
            3600*24*365,
            60*24*365,
            24*365,
            365,
            Math.floor(365/7),
            12
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
            'soat',
            'kun',
            'hafta',
            'oy',
        ]
    },
    asr: {
        v: [
            360000*24*365*100,
            3600*24*365*100,
            60*24*365*100,
            24*365*100,
            365*100,
            Math.floor(365/7 * 100),
            12*100,
            100
        ],
        u: [
            'millisekund',
            'sekund',
            'minut',
            'soat',
            'kun',
            'hafta',
            'oy',
            'yil'
        ]
    }
}





let btn = document.querySelector("#outputNatija"),
    inputUnitTime = document.querySelector(".inputUnitTime"),
    unit = document.querySelector("#unit"),
    list = document.querySelector(".list"),
    timeValue = document.querySelector("#time");


btn.addEventListener("click", ()=>{
    list.innerHTML = " "
    let unitChange;
    switch (unit.value) {
        case 'ms':
            unitChange = units.ms
            break;
        case 's':
            unitChange = units.s
            break;
        case 'min':
            unitChange = units.min
            break;
        case 'h':
            unitChange = units.h
            break;
        case 'd':
            unitChange = units.d
            break;
        case 'w':
            unitChange = units.w
            break;
        case 'mth':
            unitChange = units.mth
            break;
        case 'y':
            unitChange = units.y
            break;
        case 'asr':
            unitChange = units.asr
            break;
        default:
            break;
    }
    console.log(unitChange);
    unitChange.v.forEach((element, k) => {
        score = element * timeValue.value;
        list.innerHTML += `<li>${score} ${unitChange.u[k]}</li>`
    });
    inputUnitTime.innerHTML = `${timeValue.value} ${unit.value}:`;
    timeValue.value = '';
    unit.value = '';
})