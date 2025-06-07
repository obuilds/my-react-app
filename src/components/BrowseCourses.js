import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Collapse } from 'react-bootstrap';
import { FaLaptop, FaCalculator, FaLanguage, FaAtom, FaThLarge, FaAd } from 'react-icons/fa';
import 'animate.css';
import { Link } from 'react-router-dom';


        const allCourses = [ 
            { title: "Python Programming",
                description: "Learn the basics of python programming including data types,functions and object-oriented programming", image: "Python-Logo.jpg",
                category: "Programming"
        },
        { title: "Java Programming",
            description: "Study the Principles of Java Programming, including data types, operators, and control Structures", image: "Java-Logo.png",
            category: "Programming"
    },
    { title: "data-analytics",
        description: "Study data analysis techniques, including data visualization,statical inference, and predictive modeling", image: "data science.jpg",
        category: "Data Science"
},
{ title: "Cyber Security",
    description: "Explore the fundamentals of cybersecurity including threat analysis,risk management and security protocols", image: "Cyber security.jpg",
    category: "Cyber Security"
},

    { title: "JavaScript Programming",
        description: "Explore the basics of Javascript programming,including variables, functions, and DOM.This Courses is ideal for web development", image: "JavaScript-Logo.png",
        category: "Programming"
},
{ title: "Artificial Intelligence",
    description: "Explore the fundamentals of AI, including machine learning,deep learning and language processing", image: "AI.jpg",
    category: "Artificial Intelligence"
},
{ title: "web-development",
    description: "Learn the basics of HTML and CSS including web page structure,styling and layout. Ideal for beginners in web development ", image: "Html_CSS.jpg",
    category: "Web Development"
},
{ title: "ReactJS",
    description: "Study the Principles of ReactJS,including components,state management,and props.", image: "React.png",
    category: "Web Development"
},
        ];
        const categories = [
            { name: "All", icon: <FaThLarge />},
            { name: "Programming", icon: <FaLaptop />},
            { name: "Web Development", icon: <FaCalculator />},
            { name: "Data Science", icon: <FaLanguage />},
            { name: "Cyber Security", icon: <FaAtom />},
            { name: "Artificial Intelligence", icon: <FaAd />},
        ];
        function BrowseCourses() {
            const [searchTerm, setSearchTerm] =
            useState('')
            const [selectedCategory, setSelectedCategory] = 
            useState('All');
            const [ showFilters, setShowFilters] =
            useState('false');
            const filteredCourses =
            allCourses.filter(course => {
                const matchSearch =
                course.title.toLowerCase().includes(searchTerm.toLowerCase());
                const matchCategory =selectedCategory === 'All' ||
                course.category === selectedCategory;
                return matchSearch && matchCategory;
            });
        
        return (
            <Container className='my-5'>
                <h2 className='text-center mb-4'>Browse Courses</h2>

                <Row className='mb-3 align-items-center'>
                    <Col md={6}>
                    <Form.Control type='text' placeholder='Search courses...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </Col>
                    <Col md={6} className='text-end d-md-none mt-2'>
                    <Button className='outline-primary' size='sm' onClick={() => setShowFilters(! showFilters)}>
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </Button> 
                    </Col>
                </Row>
                <Collapse in={showFilters || window.innerWidth >= 768}>
                <div className='mb-4 text-md-end'>
                    <div className='filter-scroll d-flex flex-nowrap overflow-auto'>
                    {categories.map((cat, index) => (
                        <Badge key={index} pill bg={selectedCategory === cat.name ? "primary" : "light"} 
                        text={selectedCategory === cat.name ? "light" : "dark"} onClick={() => setSelectedCategory(cat.name)} style={{ margin:5, padding: "10px 15px", fontSize:"0.9rem", cursor: "pointer", whiteSpace:"nowrap", transition: "all 0.5s"}}>
                            <span className='me-1'>{cat.icon}</span>
                            {cat.name}
                        </Badge>
                    ))}
                    </div>
                </div>
                </Collapse>
                <Row>
                    {filteredCourses.length > 0 ?
                (
                    filteredCourses.map((_course, index ) =>(
                        <Col md={3} sm={6} xs={12} key={index} className='mb-4 animate_animated animate_fadeInUp'>
                            <Card className='h-100 shadow-sm border-0 course-card' bg='light' size='sm'>
                                <Card.Img variant='top' className='img-fluid' src={require(`../components/imagecourses/${_course.image}`)} style={{ height: "190px", objectFit: "cover"}} />
                                <Card.Body>
                    
                                    <Card.Title>{_course.title}</Card.Title>
                                    <Card.Text>{_course.description}</Card.Text>
                                <Button  variant='primary' size="sm" as={Link} to={`/tutor/${_course.title.toLowerCase().replace(/\s+/g, '-')}`}>View Tutors</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className='text-center'>No Courses found</p>
                )}
                </Row>

            </Container>
        )
    }
export default BrowseCourses;