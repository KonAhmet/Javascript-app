
function getDate(){


let date = prompt("hangi gün ki randevunuza bakmak istiyorsunuz?")

switch(date){
    
    case "pazartesi": alert("pazartesi yüzme dersi var");break;
    case "salı": alert("salı yüzme dersi var");break;
    case "çarşamba": alert("çarşamba yüzme dersi var");break;
    case "perşembe": alert("perşembe yüzme dersi var");break;
    case "cuma": alert("cuma yüzme dersi var");break;
    case "cumartesi": alert("cumartesi yüzme dersi var");break;
    case "pazar": alert("pazar yüzme dersi var");break;
    default : alert("Gün yazmadınız!")
    
}

}