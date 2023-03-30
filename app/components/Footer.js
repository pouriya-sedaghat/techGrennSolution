import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SocialNetworks from './SocialNetworks';
import FooterMenu from './FooterMenu';
import ContactForm from './ContactForm';

function Footer() {
    const list = [{ title: '101-9259 Young Rd,Chilliwack,BC,Canada' }, { title: 'info@techgreensolutions.ca' }, { title: '604-392-6878' }];
    return (
        <>
            <Container fluid className='text-white footer'>
                <Row>
                    <Col xs={12} className='p-0'>
                        <Col xs={12} className='p-0 pt-5 pb-2 d-flex justify-content-center content-footer'>
                            <div className='d-flex flex-wrap justify-content-center align-align-content-around'>
                                <div className='py-2'>
                                    <Link href='/' className='d-block'>
                                        <img src='/f-logo.png' alt='logo' className='img-fluid' />
                                    </Link>
                                </div>
                                <div className='py-2 w-100 d-flex justify-content-evenly align-items-center social-network'>
                                    <SocialNetworks />
                                </div>
                            </div>
                            <div className='px-5 mx-3 d-flex align-items-center'>
                                <ul className='m-0 p-0'>
                                    <FooterMenu />
                                </ul>
                            </div>
                            <div>
                                <ContactForm />
                            </div>
                        </Col>
                        <Col xs={12} className='px-5 py-2 d-flex justify-content-evenly align-items-center position-relative'>
                            {
                                list.map((item, index) =>
                                    <p key={index.toString()} className='m-0'>{item.title}</p>
                                )
                            }
                            <a href='#top' className='bi bi-chevron-up position-absolute bg-warning rounded-circle d-flex justify-content-center align-items-center text-decoration-none'></a>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='p-0 d-flex justify-content-center align-items-center'>
                        <p className='m-0 py-1'>Copyright 2022</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;