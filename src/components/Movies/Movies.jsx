import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Row, Col, Navbar, Nav, Container, Card } from 'react-bootstrap';
import style from "./Movies.scss";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {

        const url = 'https://ghibliapi.herokuapp.com/films';
        const resp = await axios.get(url);
        setMovies(resp.data)
        console.log(resp.data)

    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
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
            <Row className="g-4">
                {
                    movies.map((movie, i) => {
                        return (
                            <Col key={i}>
                                <Card className="cards" key={i}>
                                    <Card.Img className="cardImg" src={movie.image} />
                                    <Card.Body>
                                        <Card.Title className="cardTitle">{movie.title}</Card.Title>
                                        <Card.Text className="cardText">{movie.description.slice(0, 100) + '...'}</Card.Text>
                                        <Link to={`/${movie.id}`}>
                                            <Button className="boton" >Detalle</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
};

export default Movies;