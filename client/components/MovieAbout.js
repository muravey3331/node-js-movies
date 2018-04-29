import React, {Component} from 'react';
import {connect} from 'react-redux';
import api from '../api';
import { Link } from 'react-router-3';

//components
import Header from './Header';

//actions
import { openMovieAbout } from '../actions';

class MovieAbout extends Component {
    constructor(props) {
        super(props);
        this.routeId = this.props.params.id;
        this.movie = this.props.movie;
        this.onOpenMovie = this.props.onOpenMovie.bind(this);
    }

    async componentDidMount() {
        let response = await api.getMovie(this.routeId);
        if (response.status === 200) {
            this.movie = response.data;
            this.onOpenMovie(response.data)
        }else{
            throw new Error (response.status);
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="">
                    <div className="page-about">
                        <div>
                            <Link to="/">
                                <button className="button-back"> Back to movies list</button>
                            </Link>

                        </div>
                        <div className="flex">
                            <div className="page-about__image">
                                <img
                                    src={`${ this.movie.image || "http://marcroftmedical.com/wp-content/themes/marcroft/images/default-blog.jpg" }`}
                                    className="movie__img"/>
                            </div>
                            <div className="page-about__description">
                                <h2 className="movie__title">{this.movie.title}</h2>
                                <div className="flex row">
                                    <p className="description__key">Actors:</p>
                                    <ul className="movie__actors-list description__value">
                                        {this.movie.actors.map((name, index) => (
                                            <li key={index} className="movie__actor-item">{name},</li>))}
                                    </ul>
                                </div>
                                <div className="flex row">
                                    <p className="description__key">Rating:</p>
                                    <div className="description__value">
                                        <div className="empty-star">
                                            <div className="entire-star" style={{width: `${this.movie.rate * 10}%`}} />
                                        </div>
                                        {this.movie.rate} / 10
                                    </div>
                                </div>
                                <div className="flex row">
                                    <p className="description__key">Format:</p>
                                    <p className="description__value">{this.movie.format}</p>
                                </div>
                                <div className="flex row">
                                    <p className="description__key">Released year:</p>
                                    <p className="description__value">{this.movie.year}</p>
                                </div>
                                <div className="flex row">
                                    <p className="description__key">Description:</p>
                                    <p className="description__value">{this.movie.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ownProps,
        movie: state.movieAbout
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onOpenMovie: data => dispatch(openMovieAbout(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieAbout)