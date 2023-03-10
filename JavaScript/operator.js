//Aritmetik operatörler -> + - * / %

let sayi1 = 7
let sayi2 = 3
let isim = 'Kürşat'

let sonuc = sayi1 * sayi2
console.log(sonuc)

sonuc = sayi1 * isim // sonuç NaN
console.log(sonuc) 

let yas = '22' //string değer..
console.log(yas + 10) // + öpreatörü yanına yazdırdı.
console.log(yas * 10) // kalan öpreatörler işlemi yaptı.

// Inc Dec Operatörleri

sayi1++; sayi1--    //sonradan console bastırmada fark yok.
++sayi2; --sayi2    //console içinde yapılırsa fark ortaya çıkacaktır.

//Aritmetik Atama Operaötleri -> += -= *= /= %=
sayi1 += sayi2

//İlişkisel operatörler
console.log(sayi1 > sayi2) //boolean verecek , > < >= <= != == === !==
console.log(sayi1 === sayi2) //== ve != değeri === ve !== veri tipini de kıyaslar.  

//Mantıksal Operatörler -> && || -> ve , veya
console.log((sayi1 < 7) || (sayi2 < 9))

let sonucc= 10/2*5
console.log(sonucc)