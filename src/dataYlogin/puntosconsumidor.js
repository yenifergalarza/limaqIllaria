
function conteo() {
let correctas = 0; let incorrectas= 0;
    var inputRadioAll = new Array();
    var inputRadioAll=document.getElementsByTagName('input');
    let i;
    for (i=0; i<inputRadioAll.length; i++) {
    
    if (inputRadioAll[i].type=='radio'){
     
    if(inputRadioAll[i].checked == true){
    if (inputRadioAll[i].value == '0'){
    incorrectas++;
    }
    if (inputRadioAll[i].value == '1'){
    correctas++;
    }
    }
     
    }
    }
switch (incorrectas) {
  case 0:
    text = "eres un muy ecoamigables";
    break;
  case 1:
    text = "eres poco ecoamigable";
    break;
    case 2:
    text = "eres muy poco ecoamigable";
    break;
    case 2:
    text = " nada ecoamigable";
    break;
  default:
    text = "responde bien";
}
 document.getElementById("demo").innerHTML = text;

    }