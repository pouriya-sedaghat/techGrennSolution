import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/Ad.module.scss';
import { useState } from 'react';

function Advertising() {
    const [filter, setFilter] = useState('All');
    const list = [{ value: 'All' }, { value: 'Enviromental Ads' }, { value: 'Packing' }, { value: 'Poster' }, { value: 'Logo' }, { value: 'Billboard' }, { value: 'Brochure' }, { value: 'Catalog' }];
    return (
        <>
            <Container fluid className={`${styles.ad}`}>
                <Row className='justify-content-center py-5'>
                    <Col xs={9} className='p-0 d-flex justify-content-center'>
                        <ul className='m-0 p-0 breadcrumb'>
                            {
                                list.map((item, index) =>
                                    <li key={index.toString()} className='breadcrumb-item' onClick={() => setFilter(item.value)}>{item.value}</li>
                                )
                            }
                        </ul>
                    </Col>
                </Row>
                {
                    filter === 'All' || filter === 'Poster' ?
                        (
                            <>
                                <Row className='justify-content-center'>
                                    <Col xs={4} className='p-0'>
                                        <div className='d-flex justify-content-evenly'>
                                            <div>
                                                <img src='/pic-one.png' alt='' className='img-fluid' />
                                                <img src='/pic-two.png' alt='' className='img-fluid' />
                                            </div>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <img src='/pic-three.png' alt='' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-evenly'>
                                            <div className='d-flex align-items-end'>
                                                <img src='/pic-four.png' alt='' className='img-fluid' />
                                            </div>
                                            <div>
                                                <img src='/pic-five.png' alt='' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={4} className='p-0 d-flex flex-wrap justify-content-center align-content-between'>
                                        <div className='d-flex justify-content-evenly'>
                                            <div>
                                                <img src='/pic-six.png' alt='' className='img-fluid' />
                                            </div>
                                            <div>
                                                <img src='/pic-seven.png' alt='' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div>
                                            <img src='/pic-eight.png' alt='' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center py-3'>
                                    <Col xs={3} className='p-0 d-flex flex-wrap justify-content-center'>
                                        <div>
                                            <img src='/pic-nine.png' alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src='/pic-ten.png' alt='' className='img-fluid' />
                                        </div>
                                    </Col>
                                    <Col xs={2} className='p-0 d-flex flex-wrap justify-content-center'>
                                        <div>
                                            <img src='/pic-eleven.png' alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src='/pic-twelve.png' alt='' className='img-fluid' />
                                        </div>
                                    </Col>
                                    <Col xs={3} className='p-0  d-flex justify-content-center align-items-center'>
                                        <div>
                                            <img src='/pic-thirteen.png' alt='' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center py-4'>
                                    <Col xs={9} className='px-0 pb-5 d-flex justify-content-center'>
                                        <div className='mx-2 d-flex flex-wrap justify-content-center align-content-between'>
                                            <div className='my-2'>
                                                <img src='/pic-fourteen.png' alt='' className='img-fluid' />
                                            </div>
                                            <div>
                                                <img src='/pic-fiveteen.png' alt='' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className='mx-2 d-flex flex-wrap justify-content-center align-content-between'>
                                            <div className='my-2'>
                                                <img src='/pic-sixteen.png' alt='' className='img-fluid' />
                                            </div>
                                            <div>
                                                <img src='/pic-seventeen.png' alt='' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className='mx-2 d-flex flex-wrap justify-content-center align-content-between'>
                                            <div className='my-2'>
                                                <img src='/pic-eightteen.png' alt='' className='img-fluid' />
                                            </div>
                                            <div>
                                                <img src='/pic-nineteen.png' alt='' className='img-fluid' />
                                            </div>
                                            <div className='mt-2'>
                                                <img src='/pic-twenty.png' alt='/pic-twenty.png' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        )
                        :
                        (
                            <>
                                <Row className='justify-content-center'>
                                    <Col xs={9} className='px-0 pb-5'>
                                        <h2 className='m-0 text-center text-danger'>None !</h2>
                                    </Col>
                                </Row>
                            </>
                        )
                }
            </Container>
        </>
    );
}

export default Advertising;