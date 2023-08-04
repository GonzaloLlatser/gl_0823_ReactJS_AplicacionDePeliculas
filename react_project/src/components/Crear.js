import React from 'react'

export const Crear = () => {

    const titulo = "Añadir pelicula";

    const conseguirDatosForm = e => {
        e.preventDefault();
        alert("Formulario enviado")

    }








    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>

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
