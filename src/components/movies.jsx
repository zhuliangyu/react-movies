import React, {Component} from 'react';

import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {

    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const new_movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: new_movies});
    };

    render() {
        if (this.state.movies.length === 0) {
            return <h1>There are no movie in the list.</h1>
        }

        return (
            <React.Fragment>
                <h1>There are {this.state.movies.length} movies in the list.</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(moive => (
                        <tr key={moive._id}>
                            <td>{moive.title}</td>
                            <td>{moive.genre.name}</td>
                            <td>{moive.numberInStock}</td>
                            <td>{moive.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => {
                                    this.handleDelete(moive)
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </React.Fragment>
        );
    }


}

export default Movies;