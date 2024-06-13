let myToDos = [{
    text: "Hmtl",
    completion: false

}, {
    text: "Css",
    completion: false

},{
    text: "JavaScript",
    completion: false

}, {
    text: "PHP",
    completion: false

},{
    text: "Python",
    completion: false

}]

let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion=== false
})

// console.log(toDoLeft.length)

const paragraf = document.createElement("p")
paragraf.textContent = `Ešte treba spraviť úlohy: ${toDoLeft.length}`
document.querySelector("main").appendChild(paragraf)

// vypisanie všetkých uloh do odstavcu na stranku

for(let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text
    document.querySelector("#result-todos").appendChild(paragraph)
}

// vypisat  ulohy len co maju false 
/*
for(let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    if(myToDos[i].completion === false){
        paragraph.textContent = myToDos[i].text
        document.querySelector("main").appendChild(paragraph)
    }
    
}
*/


document.querySelector(".myBtn").addEventListener("click", function(event){
    console.log("kliknute bolo")
})





/****************
 * 
 * Filtorvanie
 ********************* */

// krok číslo: 2 pre ukladenie textu z vyhladavajuceho políčka
const filters = {
    searchText: ""
}

// krok číslo: 3  obecná filtrovavacia funkcia
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchText.toLowerCase())
    })
    //console.log(ourResults)

    document.querySelector("#result-todos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#result-todos").appendChild(paragraph)
    })
        
    
}


//  krok čislo 1 : načítanie textu z polička

let searchText = document.querySelector("#search-text")
searchText.addEventListener("input", function(event){
   filters.searchText = event.target.value
   // console.log(filters)

   // krok číslo: 4 volanie filtrovacej funkcie
   renderToDos(myToDos,filters)
})