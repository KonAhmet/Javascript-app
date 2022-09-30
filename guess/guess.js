function guess(){
let rmNumber = Math.round(Math.random()*100);
let guessNmbr = +prompt("0 ile 100 arası bir sayı tahmin ediniz!");


for(let i=6;i>0;i--){

if( guessNmbr < rmNumber){
    guessNmbr = +prompt("tahmininizi yükseltin! kalan tahmin hakkınız "+ i );
}else if( guessNmbr > rmNumber){
    guessNmbr = +prompt("tahmininizi düşürün! kalan tahmin hakkınız "+ i );
    
}else if( guessNmbr == rmNumber){
    alert("tebrikler doğru bildiniz!");
}

if(i<2) {
    alert("oyunu kaybettin!");
}



}

}
console.log(typeof guessNmbr);
guess();

