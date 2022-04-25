// Store the wallet amount to your local storage with key "amount"



let addtoWallet = document.getElementById("add_to_wallet")

addtoWallet.addEventListener("click",addamount);

let wallet=JSON.parse(localStorage.getItem("amount"))

function addamount(){
    let input= document.getElementById("amount").value;
   
    input=Number(input);
    // console.log( typeof input);
    let w = document.getElementById("wallet");
    w.innerText=input;
  
  //  arr.push(obj);

   localStorage.setItem("amount",JSON.stringify(input));

}

let moviebtn = document.getElementById("book_movies")
moviebtn.addEventListener("click",moviepage);

function moviepage(){
    location.assign("http://127.0.0.1:5500/movies.html")
}