function Affiche (test) {
    var dateEN = test;
    let tabEN = dateEN.split('/').reverse();
    let dateFR = ( tabEN.join('/'));
    return dateFR;
    }
    console.log(Affiche('2018/10/23'))