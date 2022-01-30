import React from 'react'
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap'
import logo from '../images/nitronimg.jpg'
import resume from '../images/resume.pdf'

const Home = () => {
    return (
        <div>
            <div className='section-basic section-t1'>
                <div className='title'>
                    <h1 className='section-title'>Hi! Welcome to my page!</h1>
                </div>
                <div>
                    <img src={logo} alt="N Logo" class='picture'></img>
                </div>
                <p className="section-text">
                    Hello! My name is Abinav Sadhneni and I am currently an undergraduate at the University of Michigan finishing my major in CS this year! After that, I plan to use my degree and join the workforce at a high-level company. My goal is to combine mathematics and CS at a high-level through AI and ML. If you have any interesting projects, email me at asadhneni@gmail.com, as I'm sure I'll be interested as well.
                </p>
            </div>
            <div className='section-basic section-t2'>
                <h1 className='section-title'>Quick Links</h1>
                <Row className='text-center'>
                    <Col>
                        <h1 className='section-subtitle'>Resume</h1>
                        <a href={resume}><Button variant="outline-warning">Download Resume</Button></a>
                        <p className='section-text'> This is my official resume. Proceed to the 'Resume' page to learn more.</p>
                    </Col>
                    <Col>
                        <h1 className='section-subtitle'>Gaming Projects</h1>
                        <a href='http://www-personal.umich.edu/~sadhneni/'><Button variant="outline-warning">Go to Gaming Portfolio</Button></a>
                        <p className='section-text'> This is my game creation page, which was created during my MDE at UMich. Enjoy the games!</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home
