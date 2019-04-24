'use strict';
document.body.style.backgroundColor = '#ccc';
let month = 30;
var money = +prompt("Ваш бюджет на месяц?", '');
var time = prompt('Введите текущею дату в формате YYYY-MM-DD', '');
var appData = {
    budjet: money,
    timeData: time,
    Expens: {},
    optionalExpens: {},
    income: [],
    saving: false
};
for (let i = 0; i < 100; i++) {
    if (q !== 'stop') {
        var q = prompt('Введите обязательную статью расходов в этом месяце', ''),
            a = +prompt('сколько стоит  ', '');
        if (typeof (q) === 'string' && typeof (q) != null && typeof (a) != null && q != "" && a != "" && q.length < 50) {
            console.log('Done');
            appData.Expens[q] = a;
        } else {
            console.log('не верный формат');
            i--;
        }
    } else {
        break;
    }
}
appData.moneyPerDay = appData.budjet / month;
console.log(appData.moneyPerDay);
if (appData.moneyPerDay < 200) {
    console.log('Совсем мало');
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000) {
    console.log('Нормально, пойдёт');
} else if (appData.moneyPerDay > 2000) {
    console.log('Ваще отлично');
}
console.log(parseFloat(appData.Expens.s + appData.Expens.perekus));
appData.expensForDey = expFD();
console.log('ваш лмит на день ' + appData.moneyPerDay + ' денег');
console.log('сСумма расходов на день'+appData.expensForDey);
console.log(appData);
function expFD(appData) {
    var ssum=0;
    for (var i = 0; i < appData.Expens.length; i++) {
        ssum +=appData.Expens[i]/month;
    }
    return ssum;
}