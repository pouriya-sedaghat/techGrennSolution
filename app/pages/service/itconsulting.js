import Head from 'next/head';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from '/styles/Itconsulting.module.scss';

function ItConsulting() {
    const [toggle, setToggle] = useState(false);

    const adviceParag = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ....';

    const advice = [{ src: '/mobile.png', alt: 'mobile', heading: 'Mobile Purchase Advice', paragraph: adviceParag }, { src: '/laptop.png', alt: 'laptop', heading: 'Laptop Purchase Advice', paragraph: adviceParag }, { src: '/tablet.png', alt: 'tablet', heading: 'Tablet Purchase Advice', paragraph: adviceParag }, { src: '/lcd-one.png', alt: 'lcd', heading: 'Monitor Purchase Advice', paragraph: adviceParag }, { src: '/antivirus.png', alt: 'antivirus', heading: 'Antivirus Purchase Advice', paragraph: adviceParag }, { src: '/lcd-two.png', alt: 'icd', heading: 'Sanitation And Health', paragraph: adviceParag }];

    const items = [{ heading: 'IT and Security Standards', ulItems: ['ITSM IT Service Management', 'Implemention of ITIL IT Service Management', 'COBIT and IT Management', 'ISMS Information Security Management System'], src: '/Security-one.png', alt: 'security', pic: '/sec-one.png', altPic: 'sec' }, { heading: 'Organizational Consulting', ulItems: ['ICT Consulting', 'Computer Network Consulting', 'Information Security in the Organization', 'Hardware Purchase Advice', 'Enterprise Software Purchase Advice', 'Choosing a Website Domain', 'Choosing a Website Hosting', 'Virtual Space Consulting'], src: '/Security-two.png', alt: 'security', pic: '/sec-two.png', altPic: 'sec' }];

    function showToggle(index) {
        setToggle(index);
    }
    function hideToggle(index) {
        setToggle(false);
    }
    return (
        <>
            <Head>
                <title>it consulting</title>
            </Head>
            <Container fluid className={`${styles.consulting}`}>
                <Row className='justify-content-center py-5'>
                    <Col xs={4} className='p-0'>
                        <div className='bg-warning overflow-hidden pe-4'>
                            <img src='/it-consulting-one.png' alt='IT Consulting' className='img-fluid' />
                        </div>
                    </Col>
                    <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                        <h2 className='my-1'>Preparing For Your Success Provide Best IT Solutions.</h2>
                        <p className='my-1 w-100'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.. </p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={9} className='px-0 py-2'>
                        <h2 className='m-0'>General Advice</h2>
                    </Col>
                    <Col xs={9} className='px-0 py-3 d-flex flex-wrap justify-content-between'>
                        {
                            advice.map((item, index) => {
                                return (
                                    <div key={index.toString()} onMouseOver={showToggle.bind(null, index.toString())} onMouseLeave={hideToggle} className='bg-light rounded-4 my-2 px-5 py-4'>
                                        <div className='mx-auto'>
                                            <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                        </div>
                                        <div className='d-flex flex-wrap justify-content-center'>
                                            <h3 className='my-2'>{item.heading}</h3>
                                            <p className='m-0 w-100 text-center'>{item.paragraph}</p>
                                            <Button className={`rounded-5 mt-2 px-3 py-1 border-0 ${toggle === index.toString() ? 'd-block' : 'invisible'}`}>more..</Button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
                {
                    items.map((item, index) => {
                        return (
                            <Row className='justify-content-center py-3' key={index.toString()}>
                                <Col xs={5} className='p-0 d-flex flex-wrap align-content-center'>
                                    <h2 className='mb-3 w-100'>{item.heading}</h2>
                                    <ul className='p-0 m-0'>
                                        {
                                            item.ulItems.map((item, index) => {
                                                return (
                                                    <li key={index.toString()} className='my-2'>{item}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </Col>
                                <Col xs={4} className='p-0 position-relative'>
                                    <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                    <div className='position-absolute'>
                                        <img src={`${item.pic}`} alt={`${item.altPic}`} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        );
                    })
                }
            </Container>
        </>
    );
}

export default ItConsulting;