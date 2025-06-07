import React, { Component } from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
import {Card } from 'react-bootstrap';
import './Home.css'
export default class FeaturedTutorSlider extends Component {
    render() {
        const tutors = [
            {
            id: 1,
            name: "John Doe",
            CourseName : "Web Developer",
            image: require('../components/webdev.webp')
        },
          {
            id: 2,
            name: "Jane Smith",
            CourseName : "Data Analyst",
            image: require('../components/dataanlyst.webp')
        },
        {
            id: 3,
            name: "Jane Smith",
            CourseName : "Web Developer",
            image: require('../components/Founder.jpg')
        }
    
    ];
    const isInfinite = tutors.length > 3;
    const settings = {
        dots: true,
        infinite: isInfinite,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
        return (
            <div className='p-4'>
                <h2 className='mb-4 text-center'>Featured Tutors</h2>
                <Slider {...settings}>
                    {tutors.map((tutors, index) => (
                        <Link to={`/tutors/${tutors.id}`} key={index} style={{ textDecoration:'none', color: 'inherit'}}>
                            <Card className='mx-2 p-3 text-center shadow-lg hover' bg='light' >
                                <img
                                src={tutors.image}
                                alt={tutors.name}
                                className='img-fluid  mb-3 '
                                style={{width:'500px',height: '300px',objectfit: 'cover', margin:'0 auto'}}
                                />
                                <h5>{tutors.name}</h5>
                                <p className='text-muted'>{tutors.CourseName}</p>
                            </Card>
                        </Link>
                    ))}
                </Slider>
            </div>

        )
        }
    }