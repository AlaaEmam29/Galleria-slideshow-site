"use strict"; 
let style = (id) => {
      let   start = Math.floor((id / (getData.length - 1)) * 100)
    let end = Math.floor(100 - start)

let style = `linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0) ${start}%, rgb(204, 204, 204) ${start}%, rgb(204, 204, 204) ${end}%)`
return style    
}
const stopShow = document.querySelector(".stopShow")

stopShow.addEventListener("click", indexHtm)

fetchItem(id , getData)
const  toggleSliderShow =(evt)=> {
    
    const nextBtn = evt.target.closest(".next-button")
    const backBtn = evt.target.closest(".back-button")
    
    if (nextBtn)
    {
        id++
        localStorage.setItem("gallery", id)
        if (id > getData.length - 1) {
            localStorage.setItem("gallery", getData.length - 1)
            nextBtn.disabled = true
            return
        }
        fetchItem(id , getData)
        
    }
        
     if (backBtn)
     {
         id--
         localStorage.setItem("gallery", id)
         if (id < 0) {
             backBtn.disabled = true
             localStorage.setItem("gallery", 0)
             
             return
            }
            fetchItem(id , getData)
            
            
        }
        
const bar = row.querySelector(".bar");
    bar.setAttribute("style", `background:${style(id)}`)
}
    row.addEventListener("click", toggleSliderShow)


function init() {
    const nxBtn = row.querySelector(".next-button")
    const backBtn = row.querySelector(".back-button")
    

    if (backBtn && id == 0) {
    backBtn.disabled = true
}
    if (nxBtn && id == getData.length - 1) {
        nxBtn.disabled = true
        
    }
    const bar = row.querySelector(".bar");
    bar.setAttribute("style", `background:${style(id)}`)

}
init() 
const warpper = document.querySelector(".warpper")
const overlayImg = document.querySelector(".overlayImg")
const showImage = document.querySelector(".showImage")
const closeBtn = document.querySelector(".close")
// closeBtn.addEventListener("click", closeWrapper)
function closeWrapper() {
    warpper.classList.add("hidden")
    overlayImg.classList.add("hidden")
    
}
[closeBtn, warpper].forEach(el => el.addEventListener("click",closeWrapper));
window.addEventListener("keyup", function (e) {
    if (e.key === 'Escape') {
        closeWrapper()
    }
})
row.addEventListener("click", function (e) {
    const showBtn = e.target.closest(".show")
    if (!showBtn) return
    const item = getData.filter(data => data.id === +id)[0]
    const image = item.images.gallery
    showImage.setAttribute("src" ,image )
    warpper.classList.remove("hidden")
        overlayImg.classList.remove("hidden")

})