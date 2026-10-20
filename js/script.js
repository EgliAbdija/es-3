
let prezzo = 0;
let prodotto = 0;


function Spesa(){

    
    prodotto = prompt("Quanto costa il prodotto"); 

    prodotto = parseFloat(prodotto);
    
    prezzo = prodotto + prezzo;

    console.log("TOTALE SPESA:" + prezzo + "€");
}