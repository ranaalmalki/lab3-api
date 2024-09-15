let url = 'https://rickandmortyapi.com/api/character'

fetch(url)
.then(res=>res.json())
.then((data)=>{
    console.log(data.results);

    data.results.map(item=>{
        let div = document.createElement("div")
        let con = document.getElementById("container")
console.log(item.image);
let text= document.createElement("h5")
text.textContent= item.name
        let imgg= document.createElement("img")
        imgg.src=item.image
        con.appendChild(div)
        div.appendChild(imgg)
        div.appendChild(text)
    })
    
})