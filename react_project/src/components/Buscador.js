import React from 'react'

const buscarPeli=()=>{
    //Crear estado y actualizarlo

    //El listado completo de peliculas

    //Filtrar para buscar coincdencias

}

export const Buscador = () => {
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete='off'
                    value="Lo que estoy buscando"
                    onChange={buscarPeli}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
