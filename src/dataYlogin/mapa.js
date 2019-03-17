const servicios = [{    
    longitud: -12.104245,
    latitud: -76.973020,
    titulo: "ALGAEX S.A.",
    parrafo: "Empresa que brinda servicio de supervisión ambiental de monitoreos",
}, {
    longitud: -12.117420,  
    latitud: -77.020566,
    titulo: "Arquitekturas & Asociados Sac",
    parrafo: "Empresa de asesoría comprometida con el desarrollo sostenible",  
}, {
    longitud: -15.845776,  
    latitud: -69.340358,
    titulo: "Eco Artesanías de Totora Titikaka- Chimú",
    parrafo: "El econegocio de artesanías de totora",
}, {
    longitud: -6.494182,   
    latitud: -76.366073,
    titulo: "FARO CORPORATION SAC",
    parrafo: "Empresa que comercializa y distribuye tecnologías limpias",
}, {
    longitud: -7.221541,   
    latitud: -79.429277,
    titulo: "Green Ideas Corporation",
    parrafo: "Generadora de ideas verdes fomentando el desarrollo empresarial y sostenible",
}, {
    longitud: -14.065916,   
    latitud: -75.728872,
    titulo: "IKREO PERU",
    parrafo: "Es una plataforma digital que permite a las empresas y familias integrarse a un programa de reciclaje a domicilio",
}, {
    longitud: -13.522605,   
    latitud: -71.962254,
    titulo: "Munay Productos Naturales SAC",
    parrafo: "Empacamos, transformamos y comercializamos alimentos nacionales y organicos",
}, {
    longitud: -12.162777,  
    latitud: -77.024399,
    titulo: "Sinba",
    parrafo: "Somos una empresa socio-ambiental que busca transformar la gestión de desechos en el sector gastronómico",
}];

const alimentos = [{                         
    longitud: -12.162777,  
    latitud: -77.024399,
    titulo: "Ally Mishky",
    parrafo: "Empresa social que hace productos nutritivos y naturales a base de frutas andinas",  
}, {
    longitud: -12.914468,   
    latitud: -70.196992,
    titulo: "Cooperativa Agrobosque",
    parrafo: "Organización dedicada al cultivo de cacao aromático",
}, {
    longitud: -6.027502,  
    latitud: -76.979777,
    titulo: "COOPERAMAZ",
    parrafo: " Cooperativa de multiproductos innovadores; ofertando servicios y productos con valor agregado provenientes del bosque",
}, {
    longitud: -11.942458,  
    latitud: -77.087191,
    titulo: "Cruz Campo",
    parrafo: "Empresa que proporciona superalimentos orgánicos y  promueve cultivos agrícolas sostenibles",
}, {
    longitud: -12.162777,  
    latitud: -77.024399,
    titulo: "ELEMENTO Chocolate con causa",
    parrafo: "Hacemos chocolates con cacaos nativos amazónicos",
}, {
    longitud: -12.118769,   
    latitud: -76.997110,
    titulo: "Frutiawajun SAC",
    parrafo: "Producción y comercialización de frutos amazónicos",
}, {
    longitud: -12.145650,   
    latitud: -77.022369,
    titulo: "JUAN LAURA - The Chocolate Farmer",
    parrafo: "Chocolates oscuros con cacao nativo del VRAEM",
}, {
    longitud: -12.151771,   
    latitud: -76.951027,
    titulo: "Qaya Cuero de pescado peruano",
    parrafo: "Qaya es una empresa socio-ambiental que produce productos con cuero de pescado curtido con curtientes vegetales",
}, {
    longitud: -12.162777,  
    latitud: -77.024399,
    titulo: "RUNAQ",
    parrafo: "Empresa dedicada a la producción de alimentos y productos agrícolas",
}];

const higiene = [{    
    longitud: -12.162777,  
    latitud: -77.024399,
    titulo: "Dragon de agua",
    parrafo: "Empresa dirigida a inodoros convencionales que te permite ahorrar agua",
}];

const tiendas = [{    
    longitud: -12.127600,   
    latitud: -76.991294,
    titulo: "Evea Ecofashion",
    parrafo: "Desarrollamos una línea de calzado, accesorios y biocueros con productos de la biodiversidad Peruana",
}, {
    longitud: -12.071364,   
    latitud: -77.010853,
    titulo: "JANKO Eco Bicicletas SAC",
    parrafo: "Janko es una empresa de base tecnológica que fabrica bicicletas sostenibles de bambú peruano",  
}, {
    longitud: -12.034062,   
    latitud: -77.048678,
    titulo: "Olmos Carbon SAC",
    parrafo: "Producción y comercialización sostenible de carbon vegetal",
}, {
    longitud: -9.932390,   
    latitud: -76.241706,
    titulo: "SASHA NATURA SAC",
    parrafo: "Envases, platos, vasos, utensilios biodegradables",
}, {
    longitud: -12.134501,    
    latitud: -77.011482,
    titulo: "Ecopack Perú",
    parrafo: "Envases, platos, vasos, utensilios biodegradables",
}];

const belleza = [{    
    longitud: -12.074526,
    latitud: -77.089148,
    titulo: "Global Beauty Corporation",
    parrafo: "Es una empresa multimarca que comercializa marcas cosméticas de vanguardia",
}, {
    longitud: -12.197262,   
    latitud: -77.000375,
    titulo: "Shiwi",
    parrafo: "Empresa peruana dedicada al comercio de cosméticos de áreas protegidas.",  
}];

const turismo = [{    
    longitud: -12.059633, 
    latitud: -77.049014,
    titulo: "Nassf Travel",
    parrafo: "Somos una agencia de viajes especializada en turismo sostenible",
}, {
    longitud: -10.638209,  
    latitud: -75.435402, 
    titulo: "Ulcumano Ecolodge",
    parrafo: "Proyecto de conservación de bosques de neblina en Oxapampa mediante el ecoturismo",
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
var iconoTurismo = new iconoBase({
        iconUrl: 'tourist.png'
    }),
    iconoBelleza = new iconoBase({
        iconUrl: 'make-up.png'
    }),
    iconoServicios = new iconoBase({
        iconUrl: 'plant.png'
    }),
    iconoAlimentos= new iconoBase({
        iconUrl: 'vegetables.png'
    }),
    iconoTiendas= new iconoBase({
        iconUrl: 'cart.png'
    }),
    iconoHigiene = new iconoBase({
        iconUrl: 'broom.png'
    });



for (const longitudYlatitud of turismo) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoTurismo
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='Turismo'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}

for (const longitudYlatitud of  servicios) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoServicios
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='Servicios'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}
for (const longitudYlatitud of  tiendas) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoTiendas
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='Servicios'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}
for (const longitudYlatitud of belleza) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoBelleza
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='Servicios'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}

for (const longitudYlatitud of alimentos) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoAlimentos
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='Alimentos'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}

for (const longitudYlatitud of  higiene) {
    var marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
        icon: iconoHigiene
    }).addTo(miMapa);
    marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='eco.jpg' alt='higiene'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
    var popup = L.popup();
}