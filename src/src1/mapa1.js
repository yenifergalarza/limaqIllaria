const reciclaje = [{
    longitud: -12.130137, 
    latitud: -77.006225,
    titulo: "Contenedores de Reciclaje Parque Marcahuasi",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.134081, 
    latitud: -77.017040,
    titulo: "Contenedores de Reciclaje Parque Las Lilas",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.136808, 
    latitud: -77.007341,
    titulo: "Contenedores de Reciclaje Parque La Talana",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.135675, 
    latitud: -77.000173,
    titulo: "Contenedores de Reciclaje Parque La Capullana",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.151409, 
    latitud: -77.011031,
    titulo: "Contenedores de Reciclaje Belisario",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.168420, 
    latitud: -76.995281,
    titulo: "Reciguti",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.171963, 
    latitud: -76.968893,
    titulo: "Centro Reciclaje TECSUR SAC",
    parrafo: "Centro de reciclaje",
}, {
    longitud: -12.064703, 
    latitud: -77.018675,
    titulo: "Centro de Reciclaje Celia",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.008941, 
    latitud: -77.078783,
    titulo: "Reciclaje Erlinda",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.046992, 
    latitud: -77.094595,
    titulo: "Perú Recicla COIPSA",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.198673, 
    latitud: -76.995690,
    titulo: "Plasticos y Metales",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.210034, 
    latitud: -76.976732,
    titulo: "Auccapiña Hermanos SA",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.201717, 
    latitud: -76.986110,
    titulo: "Recyclean",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.095738, 
    latitud: -77.055440,
    titulo: "Estación de Reciclaje de San Isidro",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.171852, 
    latitud: -76.971463,
    titulo: "Centro de Recicaje TECSUR S.A.",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.047541, 
    latitud: -77.013092,
    titulo: "Recipack",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -11.983529, 
    latitud: -77.071369,
    titulo: "OhDesign",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.047687, 
    latitud: -77.125783,
    titulo: "Papelera del Perú",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.083847, 
    latitud: -77.090195,
    titulo: "Procesadora Hexagono",
    parrafo: "Centro de Reciclaje",
}, {
    longitud: -12.129759, 
    latitud: -76.994037,
    titulo: "Bici Surco, Estación Ayacucho",
    parrafo: "Centro de préstamo de bicicleta",
}];



var foo = (coordenadas) => {};
var miMapa = L.map('mapa').setView([-12.099803, -77.008990], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Rubén Alcaraz. Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.comic',
    accessToken: 'pk.eyJ1IjoicmFsY2FyYXoiLCJhIjoiY2prNmRxcmh1MXNqODNya2NocWY5azEweCJ9.4Qf2Wgh-d1e_ujcRkvq0MA'
}).addTo(miMapa);
let estiloPopup = {
    'maxWidth': '300'
}

var iconoBase = L.Icon.extend({ options: { iconSize: [24, 39], iconAnchor: [16, 87], popupAnchor: [-3, -76] } }); 
var iconoReciclaje = new iconoBase({
        iconUrl: 'recycle.png'
    });



for (const longitudYlatitud of reciclaje) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoReciclaje
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='recycle.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}


let correctas = 0; let incorrectas= 0;
function conteo() {
  
    /*let inputRadioAll = new Array(document.getElementsByTagName('input'));*/
    var inputRadioAll = new Array();
    var inputRadioAll=document.getElementsByTagName('input');

    // var inputRadioAll=document.getElementsByTagName('input');
    // let inputRadioAllArray=inputRadioAll.push(document.getElementsByTagName('input'));
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
    text = "Eres una empresa muy ecoamigable";
    break;
  case 1:
    text = "Eres una empresa poco ecoamigable";
    break;
    case 2:
    text = "Eres una empresa muy poco ecoamigable";
    break;
  default:
    text = "Eres una empresa poco ecoamigable";
}
 document.getElementById("demo").innerHTML = text;

    }