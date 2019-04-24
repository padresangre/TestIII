function expFD(appData) {
    var ssum=0;
    for (var i = 0; i < appData.Expens.length; i++) {
        ssum +=appData.Expens[i]/month;
    }
    return ssum;
}