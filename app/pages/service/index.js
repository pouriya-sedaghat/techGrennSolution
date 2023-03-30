import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '/styles/Service.module.scss';
import { ScrollTop } from '/helper/scrollTop';
import { ClientHeight } from '/helper/clientHeight';

function Service() {
    const [counter, setCounter] = useState(0);
    const [space, setSpace] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const [playState, setPlayState] = useState('paused');

    const pictures = [{ style: { marginLeft: `${-counter * 74}vw` }, src: 'software-banner.png', alt: 'software banner', path: '/software' }, { style: {}, src: 'advertising-banner.png', alt: 'advertising banner', path: '/advertising' }, { style: {}, src: 'help-desk-banner.png', alt: 'help desk banner', path: '/helpdesk' }, { style: {}, src: 'digital-marketing-banner.png', alt: 'digital marketing banner', path: '/digitalmarketing' }, { style: {}, src: 'web-development-banner.png', alt: 'web development banner', path: '/webdevelopment' }, { style: {}, src: 'iT-consulting-banner.png', alt: 'iT consulting banner', path: '/itconsulting' }];

    const currentSlid = [{ number: 0 }, { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }];

    const myParagraph = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.';

    const items = [{ addClass: '', src: 'software-one.png', alt: 'IT consulting', heading: 'IT Consulting', paragraph: myParagraph, to: '/service/itconsulting' }, { addClass: 'flex-row-reverse', src: 'software-two.png', alt: 'software', heading: 'Software', paragraph: myParagraph, to: '/service/software' }, { addClass: '', src: 'software-three.png', alt: 'advertising', heading: 'Advertising', paragraph: myParagraph, to: '/service/advertising' }, { addClass: 'flex-row-reverse', src: 'software-four.png', alt: 'digital marketing', heading: 'Digital Marketing', paragraph: myParagraph, to: '/service/digitalmarketing' }, { addClass: '', src: 'software-five.png', alt: 'web development', heading: 'Web Development', paragraph: myParagraph, to: '/service/webdevelopment' }, { addClass: 'flex-row-reverse', src: 'software-six.png', alt: 'help desk', heading: 'Help Desk', paragraph: myParagraph, to: '/service/helpdesk' }];

    const percentage = [{ deg: 245, title: 'IT Consulting' }, { deg: 120, title: 'Software' }, { deg: 270, title: 'Advertising' }, { deg: 245, title: 'Digital Marketing' }, { deg: 245, title: 'Web Development' }, { deg: 245, title: 'Help Desk' }];
    useEffect(() => {
        setInterval(() => {
            setSpace(ScrollTop());
        }, 100)
        if (space > (clientHeight - (clientHeight / 2.6))) {
            setPlayState('running');
        }
        setClientHeight(ClientHeight);
    });

    useEffect(() => {
        setTimeout(() => {
            setCounter(prevState => ++prevState);
            if (counter >= 5) {
                setCounter(0);
            }
        }, 5000);
    }, [counter]);

    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            <Container fluid className={`${styles.service}`}>
                <Row className='justify-content-center my-5'>
                    <Col xs={9} className='px-0 overflow-hidden position-relative'>
                        <i onClick={() => counter === 0 ? setCounter(5) : setCounter(prevState => --prevState)} className='bi bi-chevron-left position-absolute rounded-circle d-flex justify-content-center align-items-center text-white'></i>
                        <i onClick={() => counter === 5 ? setCounter(0) : setCounter(prevState => ++prevState)} className='bi bi-chevron-right position-absolute rounded-circle d-flex justify-content-center align-items-center text-white'></i>
                        <div className='position-absolute d-flex justify-content-between align-items-center'>
                            {
                                currentSlid.map((item, index) =>
                                    <span key={index.toString()} onClick={() => setCounter(item.number)} className={`mx-1 rounded-circle border border-white d-block ${counter === item.number && 'bg-success'}`}></span>
                                )
                            }
                        </div>
                        {
                            pictures.map(
                                (item, index) =>
                                    <Link style={item.style} key={index.toString()} href={`${item.path}`} className='d-inline-block'>
                                        <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                    </Link>
                            )
                        }
                    </Col>
                </Row>
                <Row className='justify-content-center pb-4'>
                    {
                        items.map((item, index) => {
                            return (
                                <Col key={index.toString()} xs={9} className={`px-0 py-3 d-flex ${item.addClass}`}>
                                    <Col xs={4} className='p-0 position-relative'>
                                        <img src={item.src} alt={item.alt} className='img-fluid' />
                                        <div className='bg-light position-absolute rounded-5 d-flex flex-wrap justify-content-center align-content-center'>
                                            <div style={{ '--rate': '60%' }} className='d-flex justify-content-center align-items-center rounded-circle'>
                                                <div className='d-flex justify-content-center align-items-center rounded-circle'>
                                                    <p className='m-0'>60%</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='my-1'>Overal Progress</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={8} className='px-5 d-flex flex-wrap align-content-center'>
                                        <h2 className='my-3'>{item.heading}</h2>
                                        <p className='w-100'>{item.paragraph}</p>
                                        <Link href={item.to} className='text-decoration-none px-2 py-1 text-white rounded-5 border-0'>more..</Link>
                                    </Col>
                                </Col>
                            );
                        })
                    }
                </Row>
                <Row className='justify-content-center py-5'>
                    <Col xs={9} className='px-0 d-flex justify-content-evenly align-items-center rounded-5'>
                        {
                            percentage.map((item, index) =>
                                <div key={index.toString()} className='d-flex flex-wrap justify-content-center align-content-center'>
                                    <div style={{ '--degree': `${item.deg}deg`, '--playstate': playState }} className='d-flex justify-content-center align-items-center rounded-circle'>
                                        <div className='d-flex justify-content-center align-items-center rounded-circle'>
                                            <p className='m-0 text-white'>{item.deg}</p>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='m-0 text-white'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service;