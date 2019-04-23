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
    income:[],
    saving:false
};
var q1=prompt('Введите обязательную статью расходов в этом месяце', ''),
a1=prompt('сколько стоит единица ', ''),
q2=prompt('Введите обязательную статью расходов в этом месяце', ''),
a2=prompt('сколько стоит еденица ','');
appData.Expens.q1=a1;
appData.Expens.q2=a2;
var ras=parseInt(appData.Expens.q1)+parseInt(appData.Expens.q2)
document.getElementById('rashody').innerHTML=ras;
document.getElementById('exspToMonth').innerHTML=ras*month;
console.log(appData);
console.log(ras*month);
