// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet=JSON.parse(localStorage.getItem("amount"));
console.log(typeof  wallet);
let w = document.getElementById("wallet");
w.innerText=wallet;

let movie= JSON.parse(localStorage.getItem("movie"));
console.log(movie)

append(movie);


function append(data){
    let m= document.getElementById("movie");
  // m=null;
    data.map(function(el){
       let div=document.createElement("div");

        let title = document.createElement("h2");
        title.innerText=el.Title;
    
        let img= document.createElement("img");
        img.src= el.Poster;
        
        div.append(title,img);
        m.append(div);

    })
  

}

let bookbtn= document.getElementById("confirm");
bookbtn.addEventListener("click",booking);

function booking(){
    let no = document.getElementById("number_of_seats").value;
    no=Number(no);
    let p = no*100;
    console.log(p)
    if(p<=wallet){
        alert("Booking successful!")
        wallet=wallet-p;
        document.getElementById("wallet").innerText=wallet;

        localStorage.setItem("amount",JSON.stringify(wallet));
    }else if(p>wallet){
        alert("Insufficient Balance!");
    }
    

}