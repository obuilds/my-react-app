import React, { Component } from 'react'
import {Col, Container, Row, Card, Button} from 'react-bootstrap'
import about from '../components/about.png'
import './About.css';
import { FaLightbulb, FaUsers, FaStar, FaFacebook,FaLinkedin, FaLock, FaLaptopHouse, FaUserGraduate, FaGlobe, FaComments, FaInstagramSquare } from 'react-icons/fa';
import 'animate.css';
import { motion } from 'framer-motion';
import { Link} from 'react-router-dom'
export default class About extends Component {
    render() {
        const galleryImages =[
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg',
            'image5.jpg',

        ];
        const features =[
            {icon: <FaUserGraduate className='text-danger'/>, text: "200+ verified Tutors"},
            {icon: <FaGlobe/>, text:"Online and Onsite Options"},
            {icon: <FaStar className='text-warning'/> , text:"4.8/5 Average Rating"},
            {icon: <FaComments className='text-secondary'/> , text:"Easy Matching System"},
            {icon: <FaLock/> , text:"Safe And Secured Payments"},
        ];
        const containerVariants ={
            hidden:{},
            show: {
                transition: {
                    staggerChildren: 0.4,
                },
            },
        };
        const cardVariants = {
            hidden: { opacity: 0, y: 40 },
            show:{
                opacity: 1,
                y:0,
                transition: { duration: 0.5 },
            },
        };
        const FeaturedCard = ({ icon, text }) => (
            <motion.div className=' text-center p-4 rounded shadow-lg bg-dark h-100'
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0, y: 0}}
            transition={{ duration: 0.5}}
            >
                <div className='display-5 text-primary mb-3'>{icon}</div>
                <h6>{text}</h6>
            </motion.div>
        );
        return (
            <div className='bg-dark w-100'>
           <Row>
           <Col lg={7} >
           <img src={about} alt="About" width='100%' height='500px' className=' image-fluid animate-fade-in-delay'/>
           </Col>
           <Col lg={5}>
            <Card className='mt-2 mb-4 bg-dark'>
            <p className=' rounded animate-fade-in rounded mt-0 m-3 text-white'>
            <h1  className='text-center fw-bold mt-0'>About Us</h1>
                At Edmoss, we belive that learning should be personal, accessible, and impactful.
                That's why we've built a platform that connects learners with skilled tutors across
                a variety of subjects ad skills levels, both online and onsite. Whether you're a student,
                a professional looking for an upskill in Tech. Edmoss provides a seamless, flexible tutoring
                experience tailored to your goals.<br/>
                  <hr/> We're more than just a tutoring service, we're a community dedicated to growth, execellence, 
                  and lifelong learning. With a User-friendly platform, secure payment system and committed support team
                  Edmoss is here to make Technology Career journey smooth and rewarding.
            </p>
            </Card>
            </Col>
        
           </Row>
            <Row className='text-white'>
            <h1 className='text-center fw-bold'>Our Values</h1>
                <Col lg={3} sm={6} xs={12} md={4} className=' mt-0 p-3'>
                <Card className='rounded text-white bg-dark '>
                    <FaLightbulb size={40} className='text-primary mb-2' />
                    <h4 className='p-2 fw-bold'>Inspired Learning</h4>
                    <p className='p-2'>Curated tutors passionate about teaching and inspire growth</p>
                </Card>
                </Col>
                <Col lg={3} sm={6} xs={12} md={4} className=' mt-0 p-3'>
                <Card className='rounded text-white  bg-dark  '>
                    <FaUsers size={40} className='text-success mb-2'  />
                    <h5 className='p-2 fw-bold'>Bridge the Gap</h5>
                    <p className='p-2'>Accessible education for all learners of all background and goals</p>
                </Card>
                </Col>
                <Col lg={3} sm={6} xs={12} md={4} className=' mt-0 p-3'>
                <Card className='rounded  text-white  bg-dark '>
                    <FaLaptopHouse size={40} className='text-danger mb-2'  />
                    <h5 className='p-2 fw-bold'>Flexible Modes</h5>
                    <p  className='p-2'>Learn Online or Onsite with a Schedule that suits you</p>
                </Card>
                </Col>
                <Col lg={3} sm={6} xs={12} md={4} className=' mt-0 p-3'>
                <Card className='rounded text-white  bg-dark '>
                    <FaStar size={40} className='text-warning mb-2'  />
                    <h5 className=' p-2 fw-bold'>Quality Support</h5>
                    <p className='p-2'>We support your journey with reliable service and guidance</p>
                </Card>
                </Col>
            </Row>
            <Row className='justify-content-center text-white'>
                <Col lg={9}>
                
                    <h1 className='text-center fw-bold'>Our Mission</h1>
                    <p className=''> Our mission is to empower learners by bridging the gap between knowledege and accessibility.
                        We carefully curate our list of qualified tutors, ensuring they are not only have expertise
                        but also the passion to teach and inspire. With tools that allow you search by Course, Location,
                        and tutor specialization, Edmoss makes  it easy to find your perfect learning match.
                    </p>
                </Col>
            </Row>
        
            <motion.div className='scroll-container' initial={{ opacity: -2, }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                {galleryImages.map((img, idx) => (
                    <img  key={idx} src={require(`../components/gallery/${img}`)} alt={`moment-${idx}`} className='scroll-image' whileHover={{ scale: 1.08 }} initial={{opacity: 0, x: 50}} animate={{ opacity: 3, x: 0}} transition={{ duration: 0.4, delay: idx * 0.15}} />
                ))}
            </motion.div>
            <Container className='my-5 text-white '>
                <h2 className='text-center mb-4 fw-bold'>Why Choose Edmoss</h2>
                    <motion.div className='row gy-4  ' variants={containerVariants} initial='hidden' whileInView='show'
                    viewport={{ once: false, amount: 0.3 }}
                    
                    >
                    {features.map((item, idx) =>(
                        <Col xs={12} sm={6} md={4} key={idx}>
                            <FeaturedCard icon={item.icon} text={item.text} />
                        </Col>
                    ))}
                    </motion.div>
                    
            </Container>
                <hr/>
                <Container className='m-0 text-white '>
                <p>Have questions? <a href='/Contact' className='fw-bold'>Contact Us</a> or visit our social media handles</p>
                <div className='scroll-logo'>
                <Link to={'https://www.linkedin.com/company/edmoss-global/'}>
                <FaLinkedin size={40} className='rounded'/> 
                </Link>
                <Link to={'https://www.facebook.com/edmossgloballimited'}>
                <FaFacebook size={40}/>
                </Link>
                <Link to={'https://www.instagram.com/edmoss_global_?igsh=MTR2dzZmdnBxdzg5Ng=='}>
                <FaInstagramSquare size={40} className='logo-img'/>
                </Link>
                </div>
                </Container><br/>
                <div className='d-flex justify-content-center'>
               <Button className='bg-primary start-button' size='lg'>START LEARNING</Button>
               </div>


            
           </div> 
           
        )
    }
}