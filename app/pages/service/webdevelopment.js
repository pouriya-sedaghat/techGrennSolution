import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/Webdevelopment.module.scss';

function WebDevelopment() {
    const items = [{
        addClass: 'flex-row-reverse', ulItems: ['Content management system', 'Shopping cart', 'Online ordering system', 'Online payments', 'Event booking system']
        , src: '/online-payments-one.png', alt: 'online payments'
    }, {
        addClass: '', ulItems: ['Event calendar', 'Document management system', 'Blog / News management', 'Business directory / Listings']
        , src: '/membership-system.png', alt: 'membership system'
    }, {
        addClass: 'flex-row-reverse', ulItems: ['Booking / Reservations Availability system', 'Social media integration', 'Email newsletter', 'Mobile-optimized website', 'Printer-friendly website']
        , src: '/mobile-optimized.png', alt: 'mobile optimized'
    }, {
        addClass: '', ulItems: ['Password-protected pages', 'Web application', 'Portfolio showcase', 'Web hosting', 'Web site maintenance']
        , src: '/web-application.png', alt: 'web application'
    }, {
        addClass: 'flex-row-reverse', ulItems: ['Map integration', 'Testimonials', 'Customer relationship management (CRM) integration', 'Learning management system (LMS)']
        , src: '/testimonials.png', alt: 'testimonials'
    }, {
        addClass: '', ulItems: ['User interface (UI) design', 'User experience (UX) design', 'Web portals']
        , src: '/ux.png', alt: 'ux'
    }];
    return (
        <>
            <Head>
                <title>web development</title>
            </Head>
            <Container fluid className={`${styles.development}`}>
                <Row className='justify-content-center py-5'>
                    <Col xs={4} className='p-0'>
                        <div className='rounded-5 bg-warning pe-4 overflow-hidden'>
                            <img src='/web-development-one.webp' alt='web development' className='img-fluid' />
                        </div>
                    </Col>
                    <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                        <h2 className='w-100 my-2'>We Provide Best Web Development</h2>
                        <p className='m-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.. </p>
                    </Col>
                </Row>
                {
                    items.map((item, index) => {
                        return (
                            <Row key={index.toString()} className={`${item.addClass} justify-content-center py-5`}>
                                <Col xs={4} className='p-0'>
                                    <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                </Col>
                                <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                                    <ul className='m-0 p-0'>
                                        {
                                            item.ulItems.map(
                                                (item, index) => <li key={index.toString()} className='my-4'>{item}</li>
                                            )
                                        }
                                    </ul>
                                </Col>
                            </Row>
                        );
                    })
                }
            </Container>
        </>
    );
}

export default WebDevelopment;