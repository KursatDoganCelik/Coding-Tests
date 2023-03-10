function sayHeyyyo() {
    console.log(`Heyyyo`)
}
sayHeyyyo()

const sayHeyyo = function () {
    console.log(`Heyyo`)
}
sayHeyyo()

const sayHeyo = () => {  // Eğer parametresizse () yerine 
    console.log(`Heyo`)  // _ işaretini kullanabiliriz.
}
sayHeyo()

function squareIttt(sayi) {
    return sayi * sayi
}
console.log(squareIttt(3))

const squareItt = function (sayi) {
    return sayi * sayi
}
console.log(squareItt(5))

const squareIt = (sayi) => {
    return sayi * sayi
}
console.log(squareIt(7))

const square = sayi => sayi * sayi //Eğer tek parametreli ise veya 
console.log(square(9))   //tek satır return'li ise bu şekilde okee

//normal function kullanımı
const adim = (isim, soyIsim) => console.log(`İsim: ${isim} - Soyisim: ${soyIsim}`)
adim("Kevser", "Koç")

//callback function kullanımı

const adim2 = (isim, soyIsim, callback) => {
    const ismim = (`İsim: ${isim} - Soyisim: ${soyIsim}`)
    callback(ismim)
};

const adim22 = ismim => console.log(ismim)
adim2("Sedat", "Demir", adim22)
