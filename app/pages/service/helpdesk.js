import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import styles from '/styles/Helpdesk.module.scss';

function HelpDesk() {
    const items = [{ src: '/hardware-troubleshooting.png', alt: 'hardware troubleshooting', paragraph: 'Hardware troubleshooting' }, { src: '/office-machines-installation-and-troubleshooting.png', alt: 'office machines installation and troubleshooting', paragraph: 'Office machines installation and troubleshooting' }, { src: '/mcitp-and-mcse.png', alt: 'mcitp and mcse', paragraph: 'MCITP and MCSE' }, { src: '/troubleshooting-installation-and-activation-of-application-software.png', alt: 'troubleshooting installation and activation of application software', paragraph: 'Troubleshooting, installation and activation of application software' }, { src: '/network-and-internet-issues.png', alt: 'network and internet issues', paragraph: 'Network and internet issues' }, { src: '/operating-system-problems.png', alt: 'operating system problems', paragraph: 'Operating system problems' }];
    return (
        <>
            <Head>
                <title>help desk</title>
            </Head>
            <Container fluid className={styles.helpdesk}>
                <Row className='justify-content-center py-5'>
                    <Col xs={4} className='p-0'>
                        <img src='/help-desk-page.png' alt='help desk' className='img-fluid' />
                    </Col>
                    <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                        <h2 className='w-100 my-2'>We Provide Best Web Development</h2>
                        <p className='m-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.. </p>
                    </Col>
                </Row>
                <Row className='justify-content-center py-3'>
                    <Col xs={9} className='px-0 pb-5 d-flex flex-wrap justify-content-between'>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index.toString()} className='bg-light rounded-4 my-4'>
                                        <div>
                                            <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                        </div>
                                        <div className='px-3 d-flex justify-content-center align-items-center'>
                                            <p className='m-0 text-center'>{item.paragraph}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HelpDesk;