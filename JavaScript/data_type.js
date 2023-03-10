let isim = 'Kürşat' //or "Kürşat"
let soyIsim =  'Doğan\'ın Çelik' //kaçış karakteri -> \'
let yas = 22

console.log(typeof isim)
console.log(typeof yas)

let tamIsim = isim + ' ' + soyIsim
console.log("normal way: " + tamIsim)
// or 
let tamIsimm = `${isim} ${soyIsim}` //template literal - bacctick 
console.log(`template literal: ${tamIsimm}`)

let deger = true // boolean tipi
let sayı // undefined
let kelime = null // null 
