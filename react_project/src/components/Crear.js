import React, { useState } from 'react'

export const Crear = () => {

    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: " ",
        descripcion: " "
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guadar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliState(peli);

        //Guardar estado en el almacenamiento local(SS)
        guardarEnStorage(peli);


    }

    const guardarEnStorage = peli => {

        //Conseguir los elementos que ya tenemos en el localStorage
        let elementos = JSON.parse(localStorage.getItem("pelis"));
console.log(elementos);
        //Comprobar si es un array
        if (Array.isArray(elementos)) {
            //Añadir dentro del array un elemento nuevo
            elementos.push(peli);
        } else {
            //Crear un array con la nueva peli
            elementos = [peli];
        }
        console.log(elementos);

        //Guardar en el localStorage
        localStorage.setItem("pelis", JSON.stringify(elementos));

        //Devolver objeto guardado
        return peli;

    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Titulo" />

                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción">
                </textarea>

                <input type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
