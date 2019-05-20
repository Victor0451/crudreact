import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <heade className="col-12 col-md-8">
            <Link to={'/'}>
           <h1 className="text-center">React Blog</h1>
            </Link>
        </heade>
    )
}

export default Header;