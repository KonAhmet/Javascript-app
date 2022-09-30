




//  if(sayi1==String){
//     alert("sayı girin")
//  }

function sum(){



let sayi1 = document.getElementById("sayi1").value;
let sayi2 = document.getElementById("sayi2").value;
const reg = new RegExp('^[0-9]+$');

const target=document.querySelector("#result");
if(sayi1 & !reg.test(sayi1) ){
alert("lütfen 1. değeri sayısal bir değer giriniz!");
return false;
}

if(!reg.test(sayi2)){
    alert("lütfen 2.değeri sayısal bir değer giriniz!");
    return false;
    }
target.innerHTML=(+sayi1)+ (+sayi2);
document.getElementById("sayi1").value=""
document.getElementById("sayi2").value=""


}
