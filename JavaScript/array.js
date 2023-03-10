let isimler = ["Alperen", "Kürşat", "Gülbeyaz"]
isimler[3] = "Sedat"  // Eleman ekleme için..
isimler[7] = "Kevser" // 3 - 7 arasını boş atar.

console.log(isimler)  //Arrayi ev özelliklerini gösterir
console.log(isimler.toString()) //array elemanlarını gösterir.

console.log(isimler.length) // length işte -_-
for (let i = 0; i < isimler.length; i++) {
    console.log(`İsimler: ${isimler[i]}`)
}
//or
for (let i of isimler) {
    console.log(`İsimler: ${i}`)
}

//array fonksiyonları
let issimler = ["Alperen", "Kürşat", "Sedat", "Kevser"]
console.log(`${issimler.join(" - ")}`) // istediğim şeyi elemanlar arasına koyar.

let diziUzunlugu = issimler.push("MehmetCan") //dizi sonuna ekler uzunluğu return eder.
console.log(`${issimler.toString()} - ${diziUzunlugu}`)
let cikarilanEleman = issimler.pop() //dizinin son elemanı siler ve return eder.
console.log(`${issimler.toString()} - ${cikarilanEleman}`)

cikarilanEleman = issimler.shift() //baştan sil, return et
console.log(`${issimler.toString()} - ${cikarilanEleman}`)
diziUzunlugu = issimler.unshift("MehmetCan") //başa ekle, length dön
console.log(`${issimler.toString()} - ${diziUzunlugu}`)

delete issimler[2] //indexi siler ve boş bırakır.
console.log(`${issimler.toString()}`)

let sayilar = [0, 1, 2, 3, 4, 5, 6, 7]
silinenler = sayilar.splice(1, 3, 9, 9, 9) // start indexi, silinecek miktar, ekl,ene,cek,ler 
console.log(`${sayilar} - ${silinenler}`) //silinenler return edilir.
let sayilar1 = sayilar.slice(5, 7) // kesit al, yeni dizi oluştur.
console.log(`${sayilar1}`)
let sayilar2 = sayilar.concat(sayilar1) // iki diziyi birleştirir.
console.log(`${sayilar2}`)

//referans array 
let renk = ["yeşil"]
let renkler = renk //like pointer
renkler.push("mavi")
renk = ["sarı", "kırmızı"] //yeni adres tutuyor
console.log(`${renk} - ${renkler}`)

let renkk = Array.from(renk)//Array.from ile kopya dizi oluşturabiliriz..
renkk.push("mor")     //ve yaptığımız değişiklikler ana diziyi etkilemez.
console.log(renk)
console.log(renkk)

//geçici array ihtiyacı
let sayilar3 = [1, 2, 3]
const plus5 = sayi => {
    /*let geciciDizi = []*/
    for (let i = 0; i < sayilar3.length; i++) {
        sayilar3[i] += 5
    } return sayilar3 // ana dizi de değişiyor,
} // değişmemesi için geçici oluşturabilirsin. "or map"
console.log(`Dizi Elemanları - ${plus5(sayilar3)}`)

//forEach kullanımı
sayilar3.forEach(function (deger, index) {
    console.log(`Index: ${index} - Değer: ${deger}`)
}) //Her değeri callback function ile tek tek çağırıyor.

//map kullanımı
const kisiler = [
    { isim: "Sedat", Soyisim: "Demir" },
    { isim: "Kevser", Soyisim: "Koç" },
    { isim: "MehmetCan", Soyisim: "Eraslan" },
] //Ana diziyi bozmadan iş yapar.
const adlar = kisiler.map((kisi) => `${kisi.isim} ${kisi.Soyisim}`)
console.log(adlar);

//filter ullanımı
const bitkiler = [
    { ad: 'çilek', tur: 'meyve' },
    { ad: 'kereviz', tur: 'sebze' },
    { ad: 'muz', tur: 'meyve' }
]
const meyveler = bitkiler.filter((bitki) => bitki.tur === 'meyve')
console.log(meyveler)

//find kullanımı
let cilek = bitkiler.find((bitki) => bitki.ad === "çilek")
console.log(cilek);

//every ve some kulanımı
const sayilar4 = [2, 3, 4, 5]
let sonuc = sayilar4.every((sayi) => sayi < 4)
console.log(sonuc) // hepsi koşulu sağlamalı.
sonuc = sayilar4.some((sayi) => sayi < 4)
console.log(sonuc) //bir tanesi sağlasa yeter.

//reduce kullanımı
const sayilar4carpim = sayilar4.reduce((carpim, current, index) => {
    console.log(`Çarpım: ${carpim} - Current: ${current} - İndex: ${index} `);
    return carpim *= current
}, 1) // 1 sayısı initial value. Değer vermezsen ilk indexi initial value atar.
console.log(`Çarpım: ${sayilar4carpim}`) // Çok çeşitli kullanılabilir. 

//spread operatörü
let ismim = "Kürşat Doğan Çelik"
let isimHarflerim = [...ismim]
console.log(isimHarflerim)
//spread operatörü örnek kullanım
sayilariTopla = (...parameters) => {
    let toplam = 0
    for (let para of parameters) {
        toplam += para
    } console.log(toplam)
} //parametre sayısı önemsiz şekilde function açabiliyorsun..
sayilariTopla(2, 3, 4); sayilariTopla(2, 3, 4, 5, 6)

//array destructring
let name3 = ["Kürşat", "Oğuz", "MehmetCan", "Ela", "Simge", "Vildan"]

let [first="default", second, ...others] = name3 //spread operator and default usage
console.log(first, second, others)

let [firstt, , , , ,last] = name3 //middle part is gone because -> , ,
console.log(firstt, last)

