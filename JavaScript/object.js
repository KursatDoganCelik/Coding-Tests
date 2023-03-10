//factory function
function createStudent(name, birthday, mariage){
  return {
    name: name,
    birthday: birthday,
    mariage: mariage,
    showInformation: function(){ //method
      return `My name is ${this.name} and my birthday is ${this.birthday}.`
    }
  }
} 
//let check this functions
let s1 = createStudent("Kürşat", 1999, false)
let s2 = createStudent("Sedat", 1994, true)
console.log(s1.showInformation(), s2.mariage)

//constructor functions
function Student(name, birthday, mariage){
  this.name = name
  this.birthday = birthday
  this.mariage = mariage
}
//prototype concept
Student.prototype.showInformation = function(){
  return `My name is ${this.name} and my birthday is ${this.birthday}.`
}
//let check this functions
let s3 = new Student("Alperen", 1998, true)
let s4 = new Student("Ela", 2000, false)
console.log(s3.mariage, s4.showInformation())

//wrapper
let name1 = "MehmetCan"
console.log(typeof name1) //string -> primitive
name1.lastname = "Eraslan"
console.log(name1.lastname)//undefined because not a object

name2 = new String("MehmetCan")
console.log(typeof name2); //object
name2.lastname = "Eraslan"
console.log(name2.lastname)//shows value because it is a object

//inheritance
function Person(name, surname){
  this.name = name
  this.surname = surname
}
Person.prototype.sayHeyyo = function(){
  return `Heyyo i am ${this.name} ${this.surname}.`
}

function Studentt(name, surname, age, classroom){
  Person.call(this, name, surname)  //call function
  this.age = age
  this.classroom = classroom
}
Studentt.prototype = Object.create(Person.prototype)  //object.create
Studentt.prototype.constructor = Studentt

let s5 = new Studentt("Sedat", "Demir", 28, 2)
console.log(s5.sayHeyyo())

//override
Studentt.prototype.sayHeyyo = function(){
  return `Heyyo i am ${this.name} and my age is ${this.age}.`
}
console.log(s5.sayHeyyo())

//class structure
class Personn{
  static counter = 0

  constructor(name, surname){
    this.name = name
    this.surname = surname
    Personn.counter++
  }
  sayHeyyo(){
    return `Heyyo i'm ${this.name}.`
  }
}

class Studenttt extends Personn{
  constructor(name, surname, classroom){
    super(name, surname) //call superclass
    this.classroom = classroom
  }
  //override
  sayHeyyo(){
    return `Heyyo i'm ${this.name} ${this.surname}`
  }
}
let s6 = new Studenttt("Simge", "Lale", 3)
let s7 = new Personn("İlkbal", "Lale")
console.log(Personn.counter + ": " + s6.sayHeyyo())

//object desructuring
let setting = {
  title: "JavaScript",
  color: "blue",
  WeiHei: {
    weight: "200px",
    height: "100px"
  }
}
let {title: t="default", height: h, ...others} = setting //spread operator and default usage
console.log(t, h, others)

let {WeiHei: {weight: w}, color: c} = setting //for object in object usage 
console.log(w, c)
