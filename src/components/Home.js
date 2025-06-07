import React, { Component } from 'react';
import FeaturedTutorSlide from './FeaturedTutorSlider';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaListAlt, FaChalkboardTeacher, FaLaptop } from 'react-icons/fa';
import heropic from '../components/heropic.png'
export default class Home extends Component {
    render() {
        return (
            <div className='bg-light'>
                {/*Hero Section */}

                <div className='hero-section-container'>
                <figure className='position-relative'>
                        <img src={heropic} alt="Background" className='img-fluid ' />
                        </figure>
                    <Container>
                        <figcaption>
                        <Button variant='secondary' href='/courses' size='lg' className='animate-fade-in-delay' as={ Link } to={"/BrowseCourses"}>Browse Courses</Button> 
                        </figcaption>
                    
                   </Container>  
                </div>
                {/*Courses Categories */}
                <Container className='my-5'>
                    <h2 className='text-center mb-4 fw-bold'>Popular Categories</h2>
                    <Row className='row'>
                        {['Web Development   ', 'Mobile Application ','Artificial Intelligence Solution', 'Desktop Application Development'].map((category, index) => (
                            <Col key={index} md={3} className='mb-4'>
                                <Card className='h-100 shadow-lg category-card text-white'>
                                    <Card.Body>
                                        <Card.Title>{category}</Card.Title>
                                        <Card.Text className='text'>Learn {category.toLowerCase()} from verified tutors</Card.Text>
                                        <Button variant='outline-dark' href="/courses">Explore</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                {/*How it Works */}
                <Container className='my-5'>
                    <h2 className='text-center mb-4 fw-bold'>How It Works</h2>
                    <Row className='text-center' bg='success'>
                        {[
                            
                            { icon: <FaListAlt/>, step: '1.Choose a Course',desc: 'Pick from a Variety Courses'},
                            { step: '2.Select a Tutor',desc: 'Browser tutor profiles ans select your match'},
                            { step: '3.Start Learning',desc: 'Begin Lessons Online Or At Your Preferred Location'}
                        ].map((item, i) => (
                            <Col key={i} md={4} className='mb-4'>
                                <div className='how-step p-4 border rounded-4 shadow-sm hover-pop text-white'>
                                    <h4 className='fw-bold'>{item.step}</h4>
                                    <p>{item.desc}</p>  
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <FeaturedTutorSlide />
            </div>
            
        )
    }
}