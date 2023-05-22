"use strict"

fetchData()
function displayAllData(data) {
    const a = document.createElement("a")
    a.setAttribute("href","gallery.html")
    a.setAttribute("data-id", data.id)
    
    
    a.setAttribute("class", `item item-${data.id+1}`)
    a.innerHTML = `
    <div class='img'>
    <img src='${data.images.thumbnail}' alt='${data.name}'> 
    <div class='overlay'>     </div>
    </div>


        <div class='info'>
    <h3>${data.artist.name} </h3>
    <p>${data.name}</p>
    </div>


    `
    return a
}
container.addEventListener("click", function (e) {
    const item = e.target.closest("a")
    if (!item) return
    const id = item.dataset.id
    console.log(id)
    localStorage.setItem("gallery",id)
})
const startShow = document.querySelector(".startShow")
startShow.addEventListener("click", function (e) {
    location.replace("gallery.html")
    fetchItem(0 , getData)
})