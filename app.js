var fmtext="En este trabajo demostre mis habilidades con CSS flexBox usando a su vez diseño responsivo para que adapte distintas visualizaciones segun el dispositivo que corresponda. ";
var fmtitle="Frontend Mentor";
var fmurl="/w3campeche/desafios/four-card-feature-section-master/index.html#Supervisor";

var rutext="En esta ocasion usa mis habilidades en css en conjunto con Javascript para hacer solicitudes a una Api de usuarios aleatorios, para crear una lista de contactos."
var rutitle="Random Users";
var ruurl="/w3campeche/pagina4.html#containerUsers"

var lturl="/w3campeche/toDoList.html#nuevaTarea";
var lttitle="toDo List";
var lttext="En este trabajo demostre mis habilidades con JavaScript al hacer la tipica lista de quehaceres en la que se van asignando tareas y marcando cuando ya estan terminadas."

var actitle="Api del Clima";
var actext="En este trabajo demostre mis habilidades con JavaScript al hacer solicitudes en tiempo real a una apiRest del clima. Cada vez que se hace una consulta se crea una nueva tarjeta con la localidad y el clima que hace en el momento de la peticion."
var acurl="/w3campeche/pagina9.html";

var frurl="https://www.youtube.com/embed/l5T_Fn5Xjj0?si=a8yj08YlMRIknAwW&autoplay=1";
var frtitle="Boss Rabbit"
var frtext="En está ocasion, usando python, desarrolle un juego similar al frogger, en el cual un conejo debe cruzar la calle sin que lo choque ningun vehiculo, y cada cierta cantidad de saltos puede lanzar una Kame-Hame-Ha!"
function crearZonaPython(){

    const myworks=document.getElementById("myWorks");
    myworks.innerHTML="";
myworks.appendChild(crearIframe("600px","400px",frurl));
myworks.appendChild(crearPresentacion(frtext,frurl,frtitle));
}
function crearZonaJava(){

    const myworks=document.getElementById("myWorks");
    myworks.innerHTML="";

    myworks.appendChild(crearPresentacion("Ups, por el momento no he cargado el contenido trabajado en este lenguaje, sin embargo puede visitar mi repositorio de GitHub para ver lo que he hecho en esta area. Disculpe las molestias.","https://github.com/alan1996colo","Pagina no disponible...404"));


}

function crearZona(){
    const myworks=document.getElementById("myWorks");
    myworks.innerHTML="";
myworks.appendChild(crearIframe("600px","400px",fmurl));
myworks.appendChild(crearPresentacion(fmtext,fmurl,fmtitle));
myworks.appendChild(crearPresentacion(rutext,ruurl,rutitle));
myworks.appendChild(crearIframe("800px","400px",ruurl));

myworks.appendChild(crearIframe("400px","200px",lturl));
myworks.appendChild(crearPresentacion(lttext,lturl,lttitle));

myworks.appendChild(crearPresentacion(actext,acurl,actitle));
myworks.appendChild(crearIframe("800px","400px",acurl));





}
function crearIframe(w,h,url){
    const iframe= document.createElement("iframe");
    iframe.setAttribute("width",w);
    iframe.setAttribute("heigth",h);
    iframe.setAttribute("src",url);
    iframe.setAttribute("allow","autoplay")
    return iframe;

}
function crearPresentacion(texto,url,titulo){
    const divPresentacion=document.createElement("div");
    divPresentacion.classList.add("presentacion");
    const h3=document.createElement("h3");
    h3.style.color="wheat";
    h3.textContent=titulo;
    divPresentacion.appendChild(h3);
    divPresentacion.appendChild(crearDescripcion(texto,url))
    return divPresentacion;
}
function crearDescripcion(texto,url){
    const divDescripcion=document.createElement("div");
    divDescripcion.classList.add("descripcion");
    const pDescripcion=document.createElement("p");
    pDescripcion.textContent=texto;
    pDescripcion.innerHTML+=`<br><i>Deslice el scroll para ver más</i>.
  <br>
  Vea el contenido completo<a
    href=${url}> aqui</a>
`;
divDescripcion.appendChild(pDescripcion);
return divDescripcion;
}