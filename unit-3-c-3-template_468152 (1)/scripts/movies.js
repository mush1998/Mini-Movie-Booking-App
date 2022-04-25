// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet=JSON.parse(localStorage.getItem("amount"));
console.log(wallet);
let w = document.getElementById("wallet");
w.innerText=wallet;


document.getElementById("search").addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        searchmovies();
    }
})

async function searchmovies(){
    let input= document.getElementById("search").value;
    try{
        let res =await fetch(`https://www.omdbapi.com/?s=${input}&apikey=1b2e1ae2`);
        let data= await res.json();

        if(data.Response == 'True'){
           append(data.Search);
        }

        console.log("data:",data);

    }catch(err){
        console.log("err:",err);
    }
}
let bookMovie= JSON.parse(localStorage.getItem("movie")) ||[];
let moviediv=document.getElementById("movies");
function append(data){
    moviediv.innerHTML=null;

    data.map(el=> {
        let div = document.createElement("div");

        let img=document.createElement("img");
        img.src=el.Poster;

        let title=document.createElement("p");
        title.innerText=el.Title;

        let btn =  document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now");

        
        btn.addEventListener("click", function(){
           bookMovie.push(el);
           console.log(bookMovie)
           localStorage.removeItem("movie");

           localStorage.setItem("movie",JSON.stringify(bookMovie));

           location.assign("http://127.0.0.1:5500/checkout.html")
        
        });

        div.append(img,title,btn);

        moviediv.append(div);

        
    });

    }

    