let Case = document.querySelector('.case')

let date = new Date();
let years = date.getFullYear();
let month = date.getMonth() +1;
let day = date.getDate();

const monthName = ['janvier','fevrier','mars','avril','mai','juin','aout','septembre','octobre','novembre','decembre'];

const upmonth = 'upmonth'
const downmonth = 'downmonth'

function calendrier(action){
    switch(action){
        case upmonth:
            if(month<12) month ++ 
            else{
                years ++
                month = 1
            }
            break;

        case downmonth:
            if(month>0) month --
            else{
                years--
                month = 12
            }
            break;
    }
    calender()
}

document.getElementById('avant').onclick = function (){
    calendrier(downmonth)
    console.log(' calendrier(downmonth)')
}

document.getElementById('apres').onclick = function (){
    calendrier(upmonth)
    console.log(' calendrier(upmonth)')
}

function calender(month , years){
    const Month = month + 12 * (years -2020)

    let cld =[{daystart: 2, length: 31, years: 2020, month: 'janvier'}];

    for( let i = 0; i< month; i++ ) {
        let yearsimule = 2020 + Math.floor(i / 12)
        const monthsimulelongueur = [31, getfevrierlength(yearsimule), 31,30,31,30,31,31,30,31,30,31]
        let monthsimulindex = (i +1) + (yearsimule - 2020)*12

        cld[i + 1] = {
            daystart:
        }
    }
}

calender()
 function getfevrierlength(years){
    if(years % 4 === 0){
        return 29
    }
    else return 28
 }