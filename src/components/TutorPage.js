import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const tutorData = {
    "web-development": [
        {
            name: "John Doe",
            image: require('../components/webdev.webp'),
            bio: "Experinced FullStack Developer.",
            expertise: ["HTML", "TailwindCss",],
            rating: 4.9,
            reviews: 45
        },
        {
            name: "Afolabi Jane",
            image: require('../components/imagecourses/React.png'),
            bio: "Frontend engineer and UI/UX mentor.",
            expertise: [ "Bootstrap", "Figma"],
            rating: 4.0,
            reviews:25
        },
    ],
    "data-analytics": [
        {
            name: "Sarah Kim",
            image: require('../components/dataanlyst.webp'),
            bio: "Data Science Engineer",
            expertise: ["Data Science"],
            rating: 3.9,
            reviews:30
        },
    ],

};
const Tutorpage = () => {
    const navigate =useNavigate();
    const { courseSlug } = useParams();
    const tutors = tutorData[courseSlug];
    if (!tutors || tutors.length === 0)
        return (
            
            <div className='text-center my-5'>
                <h1>No Tutors Found</h1>
            <Button className='outline-primary' onClick={() => navigate('/BrowseCourses')}>Back to Courses</Button>
            
            </div>
        );
        
    return(
        
        <Container className='my-5'>
            <div className='mt-0'>
            <Button className='outline-primary' size='sm' onClick={() => navigate('/BrowseCourses')}>Back to Courses</Button>
            </div>
            <h2 className='mb-4 text-center text-capitalize'>{courseSlug.replace( /-/g, ' ')} Tutors</h2>
            <Row>
                {tutors.map((tutor, idx) => (
                    <Col md={4} sm={6} key={idx} className='mb-4'>
                        <Card className='h-100 shadow-sm text-center'>
                            <Card.Img
                            variant='top'
                            src={tutor.image}
                            className='img-fluid rounded-circle mx-auto mt-3'
                            style={{ width: "120px", height:"120px", objectFit:"cover"}}
                            />
                            <Card.Body>
                                <Card.Title>{tutor.name}</Card.Title>
                                <Card.Text>{tutor.bio}</Card.Text>
                                <div className='mb-2'>
                                    {tutor.expertise.map((skill, sidx) => (
                                        <Badge bg='secondary' className='me-1' key={sidx}>{skill}</Badge>
                                    ))}
                                </div>
                                <p><strong>{tutor.rating}</strong>stars({tutor.reviews}reviews)</p>
                                <Button variant='primary' size="sm">Book Tutor</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default Tutorpage;
