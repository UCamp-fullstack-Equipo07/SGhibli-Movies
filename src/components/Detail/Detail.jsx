import axios from "axios";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const Detail = () =>{

    const { moviesId } = useParams({});
    const [movie, setMovie] = useState({});

    const getMovie = async (Id) => {
        const url = `https://ghibliapi.herokuapp.com/films/${Id}`;
        const resp = await axios.get(url);
        setMovie(resp.data);
    };

    useEffect(() => {
        getMovie(moviesId)
    }, []);
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Studio Ghibli</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <img src={movie.movie_banner} alt="" />
            <p>{movie.description}</p>

        </div>
    )
};

export default Detail;