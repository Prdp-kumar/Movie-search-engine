/* java script*/

let search=document.getElementById('search')
let movie_input = document.getElementById('movie_input')
let statusElement = document.getElementById('status')
let boxelement=document.getElementById('box')







search.addEventListener('click', function(){
    boxelement.innerHTML=" ";
    statusElement.innerText = "";
    statusElement.innerText = "loading....";

    
    let movie_search =movie_input.value
    axios.get(`https://www.omdbapi.com/?apikey=c951ff1&s=${movie_search}`)
    .then ((res)=>{
        
        if(res.data.Response == "False"){
            statusElement.innerText = "";
            statusElement.innerText=`404 Not found`
        }else{
            statusElement.innerText = "";
            let movies = res.data.Search
        movies.map((movie,item)=>{
            console.log(movie)
            boxelement.innerHTML+=`<div class="card">
            <img src=${movie.Poster} class="movie-poster">
            <p><b>Title : </b>${movie.Title}</p>
            <p><b>Release Year : </b>${movie.Year}</p>
            <p><b>Type : </b>${movie.Type}</p>
            </div>`
        })}
    }).catch ((err)=>{
        console.log(err)
    })
})