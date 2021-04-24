import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header'
import FormularioTareas from'./componentes/FormularioTareas';
import ListaTareas from  './componentes/ListaTareas';

const App = () => {
  //obtenemos tareas guardadas de localstorage
  const tareasGuardadas = 
  localStorage.getItem("tareas") ?
  JSON.parse(localStorage.getItem("tareas")) : []; 
  //si en localStorage (que es como el caché) hay algo, lo carga, si no, carga un arreglo vacio, 
  //el metodo JSON.PARSE es lo opuesto de stringify, toma los elementos en cadena de texto y los convierte en un arreglo, 

  //Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState (tareasGuardadas); 
  //es necesario comenzar con un arreglo vacio, o en su defecto elementos de localstorage, si no, da error

  //Guardamos el estado dentro de localstorage
  useEffect(()=>{
    //localStorage.setITem es un metodo para guardar cosas en almacenamiento local 
    //el metodo JSON.stringify convierte el contenido () en una cadena de texto, de esta forma se puede guardar en localstorage
    localStorage.setItem("tareas", JSON.stringify(tareas)) 
    }, [tareas]);
    // colocar ", [tareas]" hace que se ejecute SOLO UNA VEZ o cuando LAS TAREAS CAMBIEN

  //accedemos a MostrarCompletadas y comprobabmos si es null o contiene un valor
  let configMostrarCompletadas = "";
  if(localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem("mostrarCompletadas") === "true";
  }
  

  //aqui se define mostrarCompletadas como una funcion de verdadero o falso mediante useState   
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas); 



  useEffect(()=>{
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString())
    }, [mostrarCompletadas]);

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas= {mostrarCompletadas} 
        cambiarMostrarCompletadas = {cambiarMostrarCompletadas}
      />
      <FormularioTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
      />
      <ListaTareas 
        tareas= {tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas= {mostrarCompletadas}
      />
    </div>
  );
}

export default App;
