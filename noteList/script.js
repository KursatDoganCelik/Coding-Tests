const newNote = document.querySelector('.input-value')
const newNoteBtn = document.querySelector('.form-btn')
const noteList = document.querySelector('.note-list')

document.addEventListener('DOMContentLoaded', readLocal)

newNoteBtn.addEventListener('click', addNote)
function addNote(e){
    e.preventDefault()
    
    if(newNote.value !== ""){
        noteItemCreate(newNote.value)
        addLocal(newNote.value)
        newNote.value = ''
    }
}
    
noteList.addEventListener('click', noteCheckOrDelete)
function noteCheckOrDelete(e){
    const clickedThing = e.target
        
    if(clickedThing.classList.contains('note-check')){
        clickedThing.parentElement.classList.toggle('note-blur')
    }
    if(clickedThing.classList.contains('note-delete')){
        clickedThing.parentElement.classList.add('deletEfect')
        const deleteNote = clickedThing.parentElement.children[0].innerText
        deleteLocal(deleteNote)

        clickedThing.parentElement.addEventListener('transitionend', () => {
            clickedThing.parentElement.remove()
        })
    }
}

function createLocal(){
    let notes = []
    if(localStorage.getItem('notes') !== null){
        notes= JSON.parse(localStorage.getItem('notes'))
    }
    return notes
}

function addLocal(newNote){
    let notes = createLocal()
    notes.push(newNote)
    localStorage.setItem('notes', JSON.stringify(notes))
}

function readLocal(){
    let notes = createLocal()
    notes.forEach(function(note){
        noteItemCreate(note)
    });
}

function noteItemCreate(newNote){
    //create, add div
    const noteDiv = document.createElement('div')
    noteDiv.classList.add('note-item')
    noteList.appendChild(noteDiv)
    
    //create, add li
    const noteLi = document.createElement('li')
    noteLi.classList.add('note-content')
    noteLi.innerText = newNote
    noteDiv.appendChild(noteLi)
    
    //check, delete buttons
    const noteCheckBtn = document.createElement('button')
    noteCheckBtn.classList.add('note-btn')
    noteCheckBtn.classList.add('note-check')
    noteCheckBtn.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>'
    noteDiv.appendChild(noteCheckBtn)

    const noteDeleteBtn = document.createElement('button')
    noteDeleteBtn.classList.add('note-btn')
    noteDeleteBtn.classList.add('note-delete')
    noteDeleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    noteDiv.appendChild(noteDeleteBtn)
}

function deleteLocal(newNote){
    let notes = createLocal()
    const deletElementIndex = notes.indexOf(newNote)
    notes.splice(deletElementIndex,1)

    localStorage.setItem('notes', JSON.stringify(notes))
}
