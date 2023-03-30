import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/About.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function About() {
    const [count, setCount] = useState(0);
    const aboutList = [{ src: 'trader-one.png', hTitle: 'Market Research', pTitle: 'Tech green solutions Technician will show up to you, spend a few minutes diagnosing your problem and then provide you with a free, right price, no obligation and written estimate.' }, { src: 'trader-two.png', hTitle: 'User Experience', pTitle: 'We offered people-focused solutions because custom solutions that actually help you, because it should be about you, not about us. We are going full speed when it comes to our services, and there is no turning back, there is no slowing down, and there is no stop.' }, { src: 'trader-three.png', hTitle: 'Web Development', pTitle: 'Our main motive is to complete our project within the time including all the objectives satisfied. After hand overing the product, we ensure that our client should be satisfied by our work and maintain a healthy relationship with our organization for future work also.' }, { src: 'trader-four.png', hTitle: 'Digital Marketing', pTitle: 'We keep your problem simple and we offer one package that covers all of that needs. We empower every employee in your company to increase their productivity.' }, { src: 'trader-five.png', hTitle: 'Money Back Guarantee', pTitle: 'If for any reason you’re not completely satisfied with Tech Green Solutions, cancel within the first half hour of the scheduled service and do not pay. Period!' }, { src: 'trader-six.png', hTitle: 'Discount Pricing Structure', pTitle: 'Only Tech Green Solutoin bills by the quarter hour and no travel. If it only takes fifteen minutes to complete the service, you pay for fifteen minutes, not an hour.' }];
    const ourTeam = [{ mystyle: { marginLeft: `${-count * 13.95}vw` }, src: 'number-one.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-two.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-three.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-four.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-four.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-three.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-two.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-one.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-one.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-two.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-three.png', name: 'Matt W', about: 'Founder and CEO' }, { src: 'number-four.png', name: 'Matt W', about: 'Founder and CEO' }];
    const Prev = () => {
        if (count === 0) {
            setCount(8);
        }
        else {
            setCount(prevState => --prevState);
        }
    }
    const next = () => {
        if (count === 8) {
            setCount(0);
        }
        else {
            setCount(prevState => ++prevState);
        }
    }
    console.log(count);
    return (
        <>
            <Head>
                <title>about</title>
            </Head>
            <Container fluid className={`${styles.about}`}>
                <Row className='justify-content-center'>
                    <Col xs={9} className='px-0 py-4'>
                        <h2 className='m-0'>About Us</h2>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <img src='about-one.png' alt='tech green solutions' className='img-fluid' />
                    </Col>
                    <Col xs={5} className='p-0 d-flex flex-wrap align-content-center'>
                        <p className='w-100 px-5 my-2'>Tech Green Solutions is the best answer to any question. experts are here with us to do marketing design and publish materials.</p>
                        <p className='w-100 px-5 my-2'>Basically, we do anything related to marketing including designing websites, logo, business cards; creating highquality video ads, printing marketing materials, running email campaigns, IT consulting for companies; and using artificial intelligence & updated tools.</p>
                    </Col>
                </Row>
                <Row className='justify-content-center py-5'>
                    <Col xs={9} className='p-0'>
                        <h2 className='m-0'>We’re Better. Here’s Why…</h2>
                    </Col>
                    <Col xs={9} className='px-0 py-4 d-flex flex-wrap justify-content-around align-content-center'>
                        {
                            aboutList.map((item, index) =>
                                <div key={index.toString()} className='m-2 py-2 bg-light rounded-4 d-flex justify-content-evenly align-items-center'>
                                    <div className='p-3 rounded-circle'>
                                        <img src={item.src} alt={item.hTitle.toLowerCase()} className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <h4 className='my-1'>{item.hTitle}</h4>
                                        <p className='m-0'>{item.pTitle}</p>
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={9} className='p-0'>
                        <h2>Our Team</h2>
                    </Col>
                    <Col xs={9} className='px-0 py-5 position-relative'>
                        <i onClick={Prev} className='text-white rounded-circle d-flex justify-content-center align-items-center bi bi-chevron-left position-absolute'></i>
                        <div>
                            <div className='w-75 mx-auto overflow-hidden px-2 py-2'>
                                {
                                    ourTeam.map((item, index) => {
                                        return (
                                            <Link href='/' style={item.mystyle || {}} className='text-reset d-inline-block text-decoration-none bg-light me-3 rounded-4 overflow-hidden' key={index.toString()}>
                                                <div>
                                                    <img src={item.src} alt={item.name} className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='mx-3 my-2'>{item.name}</h4>
                                                    <p className='mx-3 my-2'>{item.about}</p>
                                                </div>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <i onClick={next} className='text-white rounded-circle d-flex justify-content-center align-items-center bi bi-chevron-right position-absolute'></i>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={9} className='px-0 mb-5 position-relative rounded-5 overflow-hidden'>
                        <div className='position-absolute'>
                            <p className='m-0'>Our Get Started With</p>
                            <p className='m-0'><span className='text-warning m-0'>Tech Green Solution</span> Now!</p>
                        </div>
                        <Link href='/contact' className='text-decoration-none position-absolute border-0 px-3 py-1 rounded-5'>Get Started</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;