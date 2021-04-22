import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas}) => {

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
                return <Tarea 
                            key= {tarea.id} 
                            tarea= {tarea}
                            toggleCompletada= {toggleCompletada}
                            editarTarea= {editarTarea}
                            borrarTarea= {borrarTarea}
                        />
            })
            :<div className= "lista-tareas__mensaje" > No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default ListaTareas;