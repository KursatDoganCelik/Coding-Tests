console.log('Normal yazdırma')
console.clear() //Konsolu siler.
console.error('Hata hissiyatlı')
console.warn('Uyarı hissiyatlı')
console.table({ isim:"Kürşat", yas:22 })

console.time("süre") //süre start anı
  console.log("abc")
  console.log("abc")
  console.log("abc")
  console.log("abc")
  console.log("abc")
  console.log("abc")
  console.log("abc")
console.timeEnd("süre") //süre end anı

let hata = "Hata mesajı"
alert(hata)

let sayi = prompt('Sayı gir')
console.log(sayi)