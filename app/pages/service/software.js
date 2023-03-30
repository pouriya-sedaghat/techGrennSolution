import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/Software.module.scss';

function Software() {
    return (
        <>
            <Head>
                <title>software</title>
            </Head>
            <Container fluid className={`${styles.software}`}>
                <Row className='justify-content-center py-5'>
                    <Col xs={5} className='p-0'>
                        <img src='/software-page-one.png' alt='software' className='img-fluid' />
                    </Col>
                    <Col xs={4} className='px-5 d-flex flex-wrap align-content-center'>
                        <span>FAST PERFORMANCE</span>
                        <h2 className='w-100 my-2'>More productivity with less effort</h2>
                        <p className='m-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.. </p>
                    </Col>
                </Row>
                <Row className='flex-row-reverse justify-content-center py-5'>
                    <Col xs={4} className='p-0'>
                        <img src='/software-page-two.png' alt='software' className='img-fluid' />
                    </Col>
                    <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                        <ul className='m-0 p-0'>
                            <li className='my-4'>Custom Software Development</li>
                            <li className='my-4'>Software Product Development</li>
                            <li className='my-4'>Software Product Development</li>
                            <li className='my-4'>Software Support and Maintenance</li>
                            <li className='my-4'>Team Augmentation</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Software;