import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState("");

    const buscarPeli = (e) => {

        // Crear estado y actualizarlo
        setBusqueda(e.target.value);

        // El listado completo de peliculas

        // Filtrar para buscar coincdencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        })

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
        }


        // Actualizar el estado del listado principal con lo filtrado
        setListadoState(pelis_encontradas);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete='off'
                    onChange={buscarPeli}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
