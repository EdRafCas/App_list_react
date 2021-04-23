import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => { //aca se especifica a que propiedades del elemento ListaTareas quieres acceder (se especifican en app)

    const toggleCompletada = (id)  => {

        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id) {
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));
    }
    
    const editarTarea = (id, nuevoTexto)  => {

        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id) {
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea)=>{  //el metodo FILTER elimina el elmento que "recibe", en este caso lo recibe por su id, regresa todos menos el FILTRADO
            if(tarea.id !== id) {
                return tarea; //regresa todos las tareas QUE NO SON LA QUE BUSCABAMOS
            }
            return; //aca return esta solo porque FILTER por defecto, ELIMINA
        }));

    }

    return (  
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                if (mostrarCompletadas) {
                    return <Tarea 
                                key= {tarea.id} 
                                tarea= {tarea}
                                toggleCompletada= {toggleCompletada}
                                editarTarea= {editarTarea}
                                borrarTarea= {borrarTarea}
                            /> //si la tarea no esta completada, la devolvemos
                } else if (!tarea.completada){
                    return <Tarea 
                                key= {tarea.id} 
                                tarea= {tarea}
                                toggleCompletada= {toggleCompletada}
                                editarTarea= {editarTarea}
                                borrarTarea= {borrarTarea}
                            /> // si la tarea ya esta completada no la devolvemos
                }
                return;
            })
            :<div className= "lista-tareas__mensaje" > No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;