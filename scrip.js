let title = document.querySelector(".title")
let ul = document.querySelector("ul")
let restad = document.getElementById("btn")

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }
    else{
        offline()}
}


window.addEventListener("online" , function() {
    online()
})
window.addEventListener("offline" , function() {
    offline()
})

function online(){
    title.innerHTML ="online work"
    title.style.color = "green"
    ul.classList.add("none")
    restad.classList.add("none")
}

function offline(){
    title.innerHTML ="online don't conect"
    title.style.color = "red"
    ul.classList.remove("none")
    restad.classList.remove("none")

}



restad.onclick = function(){
    location.reload()
}

