import styles from '/styles/Home.module.scss';
import { Container, Row, Col, Button } from 'reactstrap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

function Home() {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);
  function toLeft() {
    if (counter !== 0) {
      setCounter(prevState => --prevState);
    }
    else {
      setCounter(4);
    }
  }
  function toRight() {
    if (counter !== 4) {
      setCounter(prevState => ++prevState);
    }
    else {
      setCounter(0);
    }
  }
  function prevBlog() {
    if (count !== 0) {
      setCount(prevState => --prevState);
    }
  }
  function nextBlog() {
    if (count !== 2) {
      setCount(prevState => ++prevState);
    }
  }
  function goToBlog() {
    router.push('/blog');
  }
  console.log(count);
  const ourCore = [{ addClass: 'align-self-end', src: 'Shape-one.png', alt: 'teamwork', title: 'Teamwork' }, { addClass: 'align-self-start', src: 'Shape-two.png', alt: 'honesty', title: 'Honesty' }, { addClass: 'align-self-end', src: 'Shape-three.png', alt: 'exellence', title: 'Exellence' }, { addClass: 'align-self-start', src: 'Shape-four.png', alt: 'owner ship', title: 'Ownership' }, { addClass: 'align-self-end', src: 'Shape-five.png', alt: 'professional', title: 'Professional' }, { addClass: 'align-self-start', src: 'Shape-six.png', alt: 'service', title: 'Service' }];

  const parag = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';

  const customerService = [{ style: { marginLeft: `${-counter * 11.2}vw` }, src: 'one.png', alt: 'david x', heading: 'David X', paragraph: parag }, { style: {}, src: 'two.png', alt: 'matt w', heading: 'Matt W', paragraph: parag }, , { style: {}, src: 'three.png', alt: 'rahul o', heading: 'Rahul O', paragraph: parag }, { style: {}, src: 'two.png', alt: 'matt w', heading: 'Matt W', paragraph: parag }, , { style: {}, src: 'three.png', alt: 'rahul o', heading: 'Rahul O', paragraph: parag }, { style: {}, src: 'two.png', alt: 'matt w', heading: 'Matt W', paragraph: parag }, , { style: {}, src: 'three.png', alt: 'rahul o', heading: 'Rahul O', paragraph: parag }];

  const items = [{ src: 'item-one.png', alt: 'support', title: 'Support', addClass: '' }, { src: 'item-two.png', alt: 'confidentiality', title: 'Confidentiality', addClass: 'w-25' }, { src: 'item-three.png', alt: 'reliability', title: 'Reliability', addClass: '' }];

  const blogParag = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ....';

  const blogs = [{ style: { marginLeft: `${-count * 37.87}vw` }, lists: [{ add: 'mb-4', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }, { add: '', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }] }, { style: {}, lists: [{ add: 'mb-4', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }, { add: '', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }] }, { style: {}, lists: [{ add: 'mb-4', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }, { add: '', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }] }, { style: {}, lists: [{ add: 'mb-4', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }, { add: '', title: 'September 8, 2022', heading: 'Stars of the show: Cloud and VOIP', paragraph: blogParag, link: 'Read More >>' }] }];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container fluid className={`${styles.home}`}>
        <Row className='py-3 justify-content-center'>
          <Col xs={5} className='p-0 d-flex justify-content-end align-items-center position-relative'>
            <div className='px-5 position-absolute'>
              <h2 className='my-2'>Help Desk</h2>
              <Link href='/service/helpdesk' className='px-2 py-1 text-decoration-none rounded-5 ms-auto'>more..</Link>
            </div>
            <img src='help-desk.png' className='img-fluid' />
          </Col>
          <Col xs={5} className='d-flex p-0'>
            <div className='position-relative mx-3'>
              <div className='px-4 py-3 position-absolute'>
                <h2 className='my-2'>Web Design</h2>
                <Link href='/service/webdesign' className='px-2 py-1 text-decoration-none rounded-5'>more..</Link>
              </div>
              <img src='web-design.png' className='img-fluid' />
            </div>
            <div className='d-flex flex-wrap align-content-between'>
              <div className='w-100 rounded-5 overflow-hidden position-relative'>
                <div className='px-4 py-3 position-absolute'>
                  <h2 className='my-2'>Software</h2>
                  <Link href='/service/software' className='px-2 py-1 text-decoration-none rounded-5'>more..</Link>
                </div>
                <div className='position-absolute w-100 h-100'></div>
              </div>
              <div className='w-100 rounded-5 overflow-hidden position-relative'>
                <div className='px-4 py-3 position-absolute'>
                  <h2 className='my-2'>Digital Marketing</h2>
                  <Link href='/service/digitalmarketing' className='px-2 py-1 text-decoration-none rounded-5'>more..</Link>
                </div>
                <div className='position-absolute w-100 h-100'></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='py-5 justify-content-center align-items-center'>
          <Col xs={4} className='p-0 position-relative rounded-5 bg-warning'>
            <div className='rounded-5 overflow-hidden'>
              <img src='members.png' alt='members' className='img-fluid' />
            </div>
            <div className='position-absolute w-25 bg-transparent'>
              <img src='tech-green-solutions.png' alt='tech green solutions' className='img-fluid' />
            </div>
          </Col>
          <Col xs={5} className='offset-1'>
            <h2 className='m-0 py-2'>Why Tech Green solutions?</h2>
            <p className='m-0'>Tech green solutions welcomes you to our interactive website, where you can find things easily. First, it is very clear from the name of Tech green solutions that we have creative people with brilliant and expert solutions for your company. Not only that, but Tech green solutions helps you to save energy, time and money regarding your businesses and work places.</p>
          </Col>
        </Row>
        <Row className='py-2 justify-content-center'>
          <Col xs={10} className='px-0'>
            <h2>OUR CORE VALUES</h2>
          </Col>
          <Col xs={10} className='d-flex px-0 justify-content-evenly align-items-center'>
            {
              ourCore.map((item, index) => {
                return (
                  <div key={index.toString()} className={`${item.addClass}`}>
                    <div className='rounded-circle mx-auto my-2 d-flex justify-content-center align-items-center'>
                      <img src={`${item.src}`} alt={`${item.alt}`} className='d-block w-50' />
                    </div>
                    <button className='my-2 btn rounded-5 py-1 px-4 border'>{item.title}</button>
                  </div>
                );
              })
            }
          </Col>
        </Row>
        <Row className='justify-content-center position-relative'>
          <Col xs={10} className='py-5 px-0'>
            <h2>Customer Service</h2>
          </Col>
          <Col xs={10} className='d-flex justify-content-around align-items-center px-0 mb-5 pb-5'>
            <div className='position-relative'>
              <i onClick={toLeft} className='d-flex justify-content-center rounded-circle text-white align-items-center position-absolute bi bi-chevron-left'></i>
              <i onClick={toRight} className='d-flex justify-content-center rounded-circle text-white align-items-center position-absolute bi bi-chevron-right'></i>
              <div className='overflow-hidden px-2 py-1 mx-auto'>
                {
                  customerService.map(
                    (item, index) =>
                      <a key={index.toString()} style={item.style} className='d-inline-block text-decoration-none text-reset rounded-4 border border-secondary me-3'>
                        <div className='rounded-4 overflow-hidden'>
                          <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                        </div>
                        <div className='p-2'>
                          <h3>{item.heading}</h3>
                          <p className='m-0'>{item.paragraph}</p>
                        </div>
                      </a>
                  )
                }
              </div>
            </div>
            <div className='py-1 w-25'>
              <img src='Rectangle.png' alt='rect angle' className='img-fluid' />
            </div>
          </Col>
          <Col xs={10} className='px-0 rounded-5 position-absolute'>
            <div className='d-flex justify-content-around align-items-center py-4'>
              {
                items.map(
                  (item, index) =>
                    <div key={index.toString()}>
                      <div className={`my-2 mx-auto ${item.addClass}`}>
                        <img src={`${item.src}`} alt={`${item.alt}`} className='img-fluid' />
                      </div>
                      <h2 className='m-0'>{item.title}</h2>
                    </div>
                )
              }
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center mt-3 py-5'>
          <Col xs={10} className='d-flex justify-content-between px-0 pt-5 pb-4 mt-5'>
            <h2 className='m-0'>Blog</h2>
            <div className='d-flex'>
              {count === 0 ?
                <i onClick={goToBlog} className='bg-warning mx-1 text-decoration-none d-flex justify-content-center align-items-center rounded-5 text-white'>All</i>
                :
                <i onClick={prevBlog} className={`d-flex mx-1 justify-content-center rounded-circle text-white align-items-center bi bi-chevron-left ${count === 0 && 'bg-secondary' || ''}`}></i>}
              {count === 2 ?
                <i onClick={goToBlog} className='bg-warning mx-1 text-decoration-none d-flex justify-content-center align-items-center rounded-5 text-white'>All</i>
                :
                <i onClick={nextBlog} className={`d-flex mx-1 justify-content-center rounded-circle text-white align-items-center bi bi-chevron-right ${count === 2 && 'bg-secondary' || ''}`}></i>
              }
            </div>
          </Col>
          <Col xs={9} className='p-0 overflow-hidden pb-3'>
            {
              blogs.map((item, index) =>
                <div key={index.toString()} style={item.style} className='me-4 d-inline-block'>
                  {
                    item.lists.map((item, index) =>
                      <div key={index.toString()} className={`${item.add}`}>
                        <div className='py-2 px-3 ms-auto bg-white border border-secondary rounded-4'>
                          <small className='text-warning'>{item.title}</small>
                          <h4 className='my-1'>{item.heading}</h4>
                          <p className='text-secondary m-0'>{item.paragraph}</p>
                          <Link href='/dynamic' className='text-decoration-none'>{item.link}</Link>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;