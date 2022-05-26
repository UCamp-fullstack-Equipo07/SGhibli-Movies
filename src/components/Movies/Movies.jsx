import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Button, Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import axios from "axios";
import styles from "./movies.modules.css";

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
            <Row xs={1} md={3} className="g-4">
                {
                    movies.map((movie, i) => {
                        return (
                            <Col key={i}>
                                <Card style={{ width: '18rem' }} key={i}>
                                    <Card.Img variant="top" src={movie.image} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>{movie.description.slice(0, 100) + '...'}</Card.Text>
                                        <Link to={`/${movie.id}`}>
                                            <Button variant="primary">Detalle</Button>
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