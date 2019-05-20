import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;
        return (
            <React.Fragment>
                {Object.keys(posts).map(posts => (
                    <Post
                        key={posts}
                        info={this.props.posts[posts]}
                    />
                ))}
            </React.Fragment>
        )
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulos</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        );
    }
}

export default Listado;