
const contenedorInput = document.getElementById("contenedorInput");
const contenedorInicio = document.getElementById("contenedorInicio");
const opcion1 = document.getElementById("opcion1");
const opcion2 = document.getElementById("opcion2");
const question = document.getElementById("cuestionario");
const hiddenOption1 = () => {
   contenedorInicio.classList.add('hidden');
   contenedorInput.classList.add('hidden');
    question.classList.remove('hidden');
};
opcion1.addEventListener("click", hiddenOption1);

const hiddenOption2 = () => {
    contenedorInicio.classList.add('hidden');
    question.classList.add('hidden');
    contenedorInput.classList.remove('hidden');
 };
 opcion2.addEventListener("click", hiddenOption2);


 const reclamaBeneficio =document.getElementById("reclamaBeneficio");
 const beneficio = document.getElementById("beneficio")

 const imprimeMensaje = () => {
    beneficio.innerHTML ="tu incentivo es de algunos soles";
 };
 reclamaBeneficio.addEventListener("click",imprimeMensaje);
 

 const opcion3 =document.getElementById("opcion3");
 const mapaVista = document.getElementById("mapaVista")
 
 const hiddenOption3 = () => {
   contenedorInicio.classList.add('hidden');
   contenedorInput.classList.add('hidden');
   mapaVista.classList.remove('hidden');
};
opcion3.addEventListener("click", hiddenOption3);

 


