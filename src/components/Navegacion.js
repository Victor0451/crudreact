import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navegacion.css';

const Navegacion = () => {
    return (
        <nav className="col-12 col-md-8">
            <Link to={'/'}>Todos los Postd</Link>
            <Link to={'/crear'}>Nuevo Post</Link>
        </nav>
    );
}

export default Navegacion;