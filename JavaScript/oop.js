let SD = {
    ismi: "Sedat",
    soyismi: "Demir",
    dogumTarihi: 1994,
    evliMi: true,
    sevdigiSeyler: ["Yazılım", "Kod", "Yemek"],
    yasHesabi: function () {
        this.yas = 2022 - this.dogumTarihi
    }
}
let KDC = {
    ismi: "Kürşat Doğan",
    soyismi: "Çelik",
    dogumTarihi: 1999,
    evliMi: false,
    sevdigiSeyler: ["Yazılım", "Ders", "Manzara"],
    yasHesabi: function () {
        this.yas = 2022 - this.dogumTarihi
    }  // this -> tarihi alabilmesi için gerekli.?.
}
KDC.soyismi = "Gülbeyaz"
console.log(KDC)
KDC.yasHesabi() // func çalışması için yoksa undefined..
console.log(KDC.yas) //or -> KDC["yas"] - 'yas' - `yas`

let BayKuz = [KDC, SD] // array oluşturulabilir.
console.log(BayKuz[1].ismi, BayKuz[1].sevdigiSeyler[1])

let AKG = new Object() // tercih edilmeyen bir yöntem..
AKG.ismi = "Alperen Kürşad"
AKG.evliMi = false
console.log(AKG)

//referans obje
let insan = {
    isim: "Ahmet",
    yas: 25,
}
let adam = insan //like pointer
adam.yas = 35
console.log(adam, insan)

//objeler ile sort algoritmasının kullanımı + string and number
let BayKuzIsimler = ['Kürşat', 'Sedat', 'Alperen', 'Kevser', 'MehmetCan']
let BayKuzYaslar = [23, 28, 24, 20, 21]
let Baykuz = [
    { isim: 'Kürşat', yas: 23 },
    { isim: 'Sedat', yas: 28 },
    { isim: 'Alperen', yas: 24 },
    { isim: 'Kevser', yas: 20 },
    { isim: 'MehmetCan', yas: 21 },
]
const adanZye = BayKuzIsimler.sort()
console.log(adanZye)
const zdenAya = BayKuzIsimler.sort().reverse()
console.log(zdenAya)

const kucuktenBuyugeYas = BayKuzYaslar.sort((first, second) => first - second)
console.log(kucuktenBuyugeYas)
const buyuktenKucugeYas = BayKuzYaslar.sort((first, second) => second - first)
console.log(buyuktenKucugeYas)

Baykuz.sort((first, second) => {
    if (first.isim > second.isim) {
        return 1        // küçükten büyüğe isme göre sıralama
    } else if (first.isim < second.isim) {
        return -1       // tersi için operatör değiştirmek yeterli
    } else { return 0 }
}); console.log(Baykuz)

Baykuz.sort((first, second) => {
    if (first.yas > second.yas) {
        return 1        // küçükten büyüğe yaşa göre sıralama
    } else if (first.yas < second.yas) {
        return -1       // tersi için operatör değiştirmek yeterli
    } else { return 0 }
}); console.log(Baykuz)
// 3'lü if yapısının kısa yazılabilir hali için..
// (first.yas > second.yas) ? 1 : (first.yas < second.yas ? -1 : 0)


