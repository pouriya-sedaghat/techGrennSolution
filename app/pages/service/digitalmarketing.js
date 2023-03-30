import { Container, Row, Col } from 'reactstrap';
import styles from '/styles/DigitalMarketing.module.scss';
import Head from 'next/head';

function DigitalMarketing() {
    const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ....';

    const contentProductOne = [{ addClass: 'flex-row-reverse', src: 'digital-marketing-two.png', alt: '', srcChart: 'digi-one.png', altChart: '', oneHead: 'Search Engine Optimization (SEO)', oneParag: paragraph, twoHead: 'Data Analysis', twoParag: paragraph, threeHead: 'Content Marketing', threeParag: paragraph }, { addClass: '', src: 'digital-marketing-three.png', alt: '', srcChart: '', altChart: '', oneHead: 'Website Design and Landing', oneParag: paragraph, twoHead: 'Social Media Marketing', twoParag: paragraph, threeHead: 'PCC', threeParag: paragraph }, { addClass: 'flex-row-reverse', src: 'digital-marketing-four.png', alt: '', srcChart: 'digi-two.png', altChart: '', oneHead: 'Affiliate Marketing', oneParag: paragraph, twoHead: 'Marketing Automatiom', twoParag: paragraph, threeHead: 'Email marketing', threeParag: paragraph }];

    const items = [{ src: 'add-one.png', alt: 'friendly interface', title: 'Friendly Interface' }, { src: 'add-two.png', alt: 'extremely flexible', title: 'Extremely Flexible' }, { src: 'add-three.png', alt: 'strong encryption', title: 'Strong Encryption' }];

    const contentProductTwo = [{ addClass: '', src: 'digital-marketing-five.png', alt: '', srcChartOne: 'digi-three.png', altChartOne: '', srcChartTwo: 'digi-four.png', altChartTwo: '', srcChartThree: '', altChartThree: '', oneHead: 'Online PR', oneParag: paragraph, twoHead: 'Inbound Marketing', twoParag: paragraph, threeHead: 'Sponsored Content', threeParag: paragraph }, { addClass: 'flex-row-reverse', src: 'digital-marketing-six.png', alt: '', srcChartOne: 'digi-five.png', altChartOne: '', srcChartTwo: 'digi-six.png', altChartTwo: '', srcChartThree: 'digi-seven.png', altChartThree: '', oneHead: 'Viral Marketing', oneParag: paragraph, twoHead: 'Mobile Marketing', twoParag: paragraph, threeHead: 'SMS Marketing', threeParag: paragraph }, { addClass: '', src: 'digital-marketing-seven.png', alt: '', srcChartOne: 'digi-eight.png', altChartOne: '', srcChartTwo: '', altChartTwo: '', srcChartThree: '', altChartThree: '', oneHead: 'Influencer Marketing', oneParag: paragraph, twoHead: 'Video and Podcast Marketing', twoParag: paragraph, threeHead: '', threeParag: paragraph }];
    return (
        <>
            <Head>
                <title>digital marketing</title>
            </Head>
            <Container fluid className={`${styles.digital}`}>
                <Row className='justify-content-center py-5'>
                    <Col xs={4} className='p-0'>
                        <img src='/digital-marketing-one.png' alt='' className='img-fluid' />
                    </Col>
                    <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                        <span className='m-0'>START, CONNECT, ENJOY</span>
                        <h2 className='my-2 w-100'>Start your online business with Tech Green Solution</h2>
                        <p className='m-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </Col>
                </Row>
                {
                    contentProductOne.map((item, index) => {
                        return (
                            <Row key={index.toString()} className={`${item.addClass} justify-content-center py-5`}>
                                <Col xs={4} className='p-0 position-relative'>
                                    <img src={`/${item.src}`} alt={`/${item.alt}`} className='img-fluid' />
                                    {
                                        item.srcChart ?
                                            (
                                                <div className='position-absolute'>
                                                    <img src={`/${item.srcChart}`} alt={`${item.altChart}`} className='img-fluid' />
                                                </div>
                                            )
                                            :
                                            ''
                                    }
                                </Col>
                                <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                                    <h3 className='m-0'>{item.oneHead}</h3>
                                    <p className='my-2 w-100'>{item.oneParag}</p>
                                    <h3 className='m-0'>{item.twoHead}</h3>
                                    <p className='my-2 w-100'>{item.twoParag}</p>
                                    <h3 className='m-0'>{item.threeHead}</h3>
                                    <p className='my-2 w-100'>{item.threeParag}</p>
                                </Col>
                            </Row>
                        );
                    })
                }
                <Row className='justify-content-center'>
                    <Col xs={9} className='px-0 py-5'>
                        <h2 className='m-0'>We’re Better. Here’s Why…</h2>
                    </Col>
                    <Col xs={9} className='p-0 d-flex justify-content-evenly py-4 rounded-5'>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index.toString()}>
                                        <div className='mx-auto my-2'>
                                            <img src={`/${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                                        </div>
                                        <div>
                                            <h3 className='m-0'>{item.title}</h3>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
                {
                    contentProductTwo.map((item, index) => {
                        return (
                            <Row key={index.toString()} className={`${item.addClass} justify-content-center py-5 mb-3`}>
                                <Col xs={4} className='p-0 position-relative'>
                                    <img src={`/${item.src}`} alt={`/${item.alt}`} className='img-fluid' />
                                    <div className='position-absolute'>
                                        <img src={`/${item.srcChartOne}`} alt={`${item.altChartOne}`} className='img-fluid' />
                                    </div>
                                    {
                                        item.srcChartTwo ?
                                            (
                                                <div className='position-absolute'>
                                                    <img src={`/${item.srcChartTwo}`} alt={`${item.altChartTwo}`} className='img-fluid' />
                                                </div>
                                            )
                                            :
                                            ''
                                    }
                                    {
                                        item.srcChartThree ?
                                            (
                                                <div className='position-absolute'>
                                                    <img src={`/${item.srcChartThree}`} alt={`${item.altChartThree}`} className='img-fluid' />
                                                </div>
                                            )
                                            :
                                            ''
                                    }
                                </Col>
                                <Col xs={5} className='px-5 d-flex flex-wrap align-content-center'>
                                    <h3 className='m-0'>{item.oneHead}</h3>
                                    <p className='my-2 w-100'>{item.oneParag}</p>
                                    <h3 className='m-0'>{item.twoHead}</h3>
                                    <p className='my-2 w-100'>{item.twoParag}</p>
                                    {
                                        item.threeHead ?
                                            (
                                                <>
                                                    <h3 className='m-0'>{item.threeHead}</h3>
                                                    <p className='my-2 w-100'>{item.threeParag}</p>
                                                </>
                                            )
                                            :
                                            ''
                                    }
                                </Col>
                            </Row>
                        );
                    })
                }
            </Container>
        </>
    );
}

export default DigitalMarketing;