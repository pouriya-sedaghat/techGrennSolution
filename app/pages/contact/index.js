import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import styles from '/styles/Contact.module.scss';
import { useRef } from 'react';

function Contact() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const commentInputRef = useRef();
    async function formHandler(e) {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const comment = commentInputRef.current.value;

        const reqBody = { name, email, comment };

        if (name && email && comment) {
            nameInputRef.current.value = '';
            emailInputRef.current.value = '';
            commentInputRef.current.value = '';
            alert('success');
            const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(reqBody), headers: { 'Content-Type': 'application/json' } });
            const responseData = await response.json();
        }
        else {
            alert('faild');
        }
    }
    return (
        <>
            <Head>
                <title>contact us</title>
            </Head>
            <Container fluid className={`${styles.contact}`}>
                <Row className='justify-content-center'>
                    <Col xs={9} className='px-0 py-5'>
                        <h2 className='m-0'>Contact Us</h2>
                    </Col>
                    <Col xs={9} className='px-0 py-5'>
                        <div className='rounded-5 overflow-hidden mx-auto'>
                            <img src='violet-landscape.jpg' alt='violet landscape' className='img-fluid' />
                        </div>
                    </Col>
                    <Col xs={9} className='p-5'>
                        <form onSubmit={formHandler}>
                            <div className='d-flex flex-wrap justify-content-between align-content-between'>
                                <div>
                                    <label htmlFor='name' className='d-block'>Your Name:</label>
                                    <input ref={nameInputRef} type='text' className='rounded-5 px-3 border-0 py-2 my-2' id='name' placeholder='Your Name' />
                                    <label htmlFor='email' className='d-block'>Your Email:</label>
                                    <input ref={emailInputRef} type='text' className='rounded-5 px-3 border-0 py-2 my-2' id='email' placeholder='Your Email' />
                                </div>
                                <div>
                                    <label htmlFor='comment' className='d-block'>Explain your question in details:</label>
                                    <textarea ref={commentInputRef} className='rounded-4 px-3 border-0 py-2 my-2' id='comment' placeholder='Write Here'></textarea>
                                </div>
                                <div className='w-100'>
                                    <button className='rounded-5 px-3 border-0 py-2 my-2 border-0 text-white'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col xs={9} className='p-5 d-flex justify-content-between align-items-center'>
                        <div className='mx-1'>
                            <ul className='m-0 p-0'>
                                <li className='my-3'>101-9259 Young Rd, Chilliwack, BC, Canada</li>
                                <li className='my-3'>info@techgreensolutions.com</li>
                                <li className='my-3'>(+1)604-720-8001</li>
                            </ul>
                        </div>
                        <div className='mx-1'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289742303!2d-79.51814179377936!3d43.71815566213178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1678476991103!5m2!1sen!2s" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-5 overflow-hidden'></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;