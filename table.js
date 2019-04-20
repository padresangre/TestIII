'use strict';
document.body.style.backgroundColor='#ccc';    
let month=30;
var money =prompt("Ваш бюджет на месяц?",'');
document.getElementById('budjet').innerHTML= money;
var time=prompt('Введите текущею дату в формате YYYY-MM-DD','');
var appData={
    budjet:money,
    timeData:time,
    Expens:{},
    optionalExpens:{},
    income:income=[],
    saving:false
};


