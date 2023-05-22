const loading = document.querySelector(".loading")
const container = document.querySelector(".container")
const allData = []
const row = document.querySelector(".row")

let id = localStorage.getItem("gallery")
let getData = localStorage.getItem("data")
const indexHtm = () => location.replace("index.html")
if (!id && !getData) {
indexHtm()
}
getData = JSON.parse(getData)

const fetchData = async () => {
    loading.classList.remove("hidden")
    try {
        const request = await fetch("http://localhost:3000/data")
        const data = await request.json()
        console.log(data)
        
        const fragment = document.createDocumentFragment()
        data.forEach((item) => {
            fragment.appendChild(displayAllData(item))
            allData.push(item)
            
        })
        container.appendChild(fragment)
        
        loading.classList.add("hidden")
        localStorage.setItem("data" , JSON.stringify(allData))
    }
    catch (err) {
        console.log(err)
            loading.classList.remove("hidden")

        loading.textContent = "There's Error Try again later!!"
    }
    
}

const fetchItem = async (id , getData) => {
    loading.classList.remove("hidden")
    try {
        const item = getData.filter(data => data.id === +id)
        displayGallery(item)
        
            loading.classList.add("hidden")

    }
    catch (error) {
        loading.classList.remove("hidden")
        console.log(error)

    }
}

function displayGallery(item) {
    item = item[0]
    row.innerHTML = ''
    const html = `
    <div class='rowContainer'>
    
    <div class='col'>
    <div class='imgs-col'>
    <img class='large' src="${item.images.hero.large}">
    <div class='show'>
    <img src='../imgs/icon-view-image.svg'>
    <span>VIEW IMAGE</span>
    </div>
    </div>
    <div class='text'>
    <h2>${item.name}</h2>
    <h5>${item.artist.name}</h5>

    </div>
    <div class='artist'>
    <img src=${item.artist.image}>
    </div>
    </div>
    
<div class='col-2'>
<div class='year'><span>${item.year}</span></div>
<div class='desc'> <p>${item.description}</p>
</div>
<div class='link'><a href='${item.source}'target='_blank'>GO TO SOURCE</a>
</div>

</div>
    </div>

<div class='bar' style='background:${style(id)}'></div>

<footer class='footer'>
<div class='info'>
    <h2>${item.name}</h2>
    <h5>${item.artist.name}</h5>

</div>
<div class='toggle'>
<button class='back-button'>
<svg   xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>
</button>
<button class='next-button'>
<svg    xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>
</button>

</div>
</footer>
    
        
    `
    row.innerHTML = html
}
