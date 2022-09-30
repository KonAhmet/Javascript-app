function howOld(){


let age= +prompt("yaşınızı girin",);
let eventDate= +prompt("aradığınız olay hangi yılda yaşandı?");
let thisyear= new Date().getFullYear();
if(age<=0) { 
    alert("dalga geçme!");
    
}else if(eventDate == (thisyear - age)){
    let message = "sen o yıl doğdun"
    document.getElementById("text").innerHTML= message ;
   }
else if(eventDate < (thisyear - age)){
 let message = "sen doğmadan " + ((thisyear-age) - eventDate) + " yıl önce oldu"
 document.getElementById("text").innerHTML= message ;
}else if(eventDate > (thisyear - age)) {
    alert("sen doğduktan sonra oldu aslanım!");
} 
else{
    alert("Ya sayı girmedin ya da benimle dalga geçiyorsun aslan parçası!");
}
}

howOld();