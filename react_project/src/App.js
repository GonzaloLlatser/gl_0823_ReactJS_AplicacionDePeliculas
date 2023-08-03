import { Crear } from "./components/Crear";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";

function App() {
    return (
        <div className="layout">
            {/* Cabecera del sitio */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>MisPelis</h1>
            </header>

            {/* Barra de navegacion */}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Películas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <section className="content">
                {/* Aqui va el listado de peliculas */}
                <Listado />
            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <Buscador />
                <Crear />
            </aside>

            {/* Pie de página */}
            <footer className="footer">
                Máster en JavaScript E12 y TypeScript - <a href="https://github.com/GonzaloLlatser/gl_0823_ReactJS_AplicacionDePeliculas">Gonzalo Llatser GitHub</a>
            </footer>
        </div>
    );
}

export default App;
