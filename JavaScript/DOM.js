//html seçiciler
let deger
deger = document.body

deger = document.querySelectorAll('h1') //or
deger = document.getElementsByTagName('h1')

console.log(deger)

//   . -> class      # -> ID
const h = document.querySelector('.jsClass')
const h1 = document.querySelector('#jsID')
h1.style.backgroundColor = 'red'
h.style.padding = '2rem'
h1.textContent = 'Js Ders'

//parent, child, sibling gezintisi
const firstUl = document.querySelector('ul.list')
deger = firstUl.childElementCount
deger = firstUl.firstElementChild
deger = firstUl.parentElement

const lastLi = firstUl.lastElementChild
deger = lastLi.previousElementSibling

console.log(deger)

//ekle, değiştir, çıkar
const title = document.createElement('h2')
title.className = 'title'
title.textContent = 'Document Obje'
document.body.appendChild(title)

const newTitle = document.createElement('h4')
newTitle.textContent = 'İsim Soyisim'
newTitle.className = 'baslik'
title.parentElement.replaceChild(newTitle, title)

document.querySelector('ul.list :nth-child(2)').remove()
firstUl.removeChild(document.querySelectorAll('li')[1])

//mouse events
const titlee = document.querySelector('.jsClass')
titlee.addEventListener('click',event)
titlee.addEventListener('dblclick',event)

titlee.addEventListener('mousedown',event)
titlee.addEventListener('mouseup',event)

titlee.addEventListener('mouseenter',event) // over
titlee.addEventListener('mouseleave',event) // out

function event(e){
    //console.log(e.type)
}

//aRGiBiğğ
const titleYazi = document.createElement('h6')
titleYazi.className = 'RedGreenBlue'
titleYazi.textContent = 'Come for RGB'

titlee.appendChild(titleYazi)
titlee.addEventListener('mousemove',changeBgc)

function changeBgc(e){
    titlee.style.backgroundColor = `rgb(${e.clientX %255}, ${e.clientY %255}, ${(e.clientX + e.clientY) %255})`
    document.querySelector('.RedGreenBlue').textContent = `R: ${e.clientX %255} G: ${e.clientY %255} B: ${(e.clientX + e.clientY) %255}`
}

//keyboard event
const input = document.querySelector('.inputThing')
input.addEventListener('keydown', eventt)
input.addEventListener('keyup', eventt)
input.addEventListener('keypress', eventt)

input.addEventListener('focus', eventt)
input.addEventListener('blur', eventt)

input.addEventListener('cut', eventt)
input.addEventListener('copy', eventt)
input.addEventListener('paste', eventt)

function eventt(e){
    //console.log(e.type)
}

//local storage kullanmı
document.querySelector('.formThing').addEventListener('submit', function(e){
    
    const inputValue = document.querySelector('.inputThing').value
    let inputValueArray = []
    
    if (localStorage.getItem('nameList') !== null) {
        inputValueArray = JSON.parse(localStorage.getItem('nameList'))
    }
    
    inputValueArray.push(inputValue)
    localStorage.setItem('nameList', JSON.stringify(inputValueArray))
    
    const newLi = document.createElement('li')
    newLi.textContent = inputValue
    document.querySelector('.ulThing').appendChild(newLi)
    
    e.preventDefault()
})
//local storage'in içi dolu olmasına ilişkin ek kodlar
if (localStorage.getItem('nameList') !== null) {
    inputValueArray = JSON.parse(localStorage.getItem('nameList'))
    inputValueArray.forEach(function(item){
        const newLi = document.createElement('li')
        newLi.textContent = item
        document.querySelector('.ulThing').appendChild(newLi)
    })
}

