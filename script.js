"use strict"

let form = document.querySelector("form")
let inpName = document.querySelectorAll("input")[0]
let inpSurn = document.querySelectorAll("input")[1]
let inpAge = document.querySelectorAll("input")[2]
let add = document.querySelectorAll("button")[0]
let delet = document.querySelectorAll("button")[1]
let delet2 = document.querySelectorAll("button")[2]



add.addEventListener("click", function(e) {
    e.preventDefault()
if(inpName.value < 1 || inpSurn.value < 1 || inpAge.value < 1) {
        alert("Suvesk duomenis")
    } else {
        let tableBody = document.querySelector("#myTable > tbody")
        let row = tableBody.insertRow()
        row.classList.add("trBody")
        let n = row.insertCell(0)
        let s = row.insertCell(1)
        let a = row.insertCell(2)

        n.innerHTML = inpName.value
        s.innerHTML = inpSurn.value
        a.innerHTML = inpAge.value

        inpName.value = ""
        inpSurn.value = ""
        inpAge.value = ""
    }
    

    
  
})

delet.addEventListener("click", function(e) {
    e.preventDefault()   
    
    let tableBody = document.querySelector("#myTable > tbody > tr")
    tableBody.remove(0)

  
})

delet2.addEventListener("click", function(e) {
    e.preventDefault()

    let tableBody = document.querySelector("#myTable > tbody > tr")
   
    tableBody.nextSibling.remove(-1)
})


