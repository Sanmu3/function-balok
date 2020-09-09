var panjang = 4
var lebar = 6
var tinggi = 5

function volumebalok(panjang, lebar, tinggi) {
    var volume ;
     volume = panjang * lebar * tinggi
     return volume;
    
}

function luasPbalok(panjang, lebar, tinggi) {
    var luas ;
    luas = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)
    return luas;
}

document.write('panjang : ' + panjang + '<br/> lebar : ' + lebar + '<br/> tinggi : ' + tinggi +'<br/>')
document.write('<br/> volume balok : ' + volumebalok(4,6,5) + '<br/>')
document.write('<br/> luas permukaan balok : ' + luasPbalok(4, 6, 5) + '<br/>')