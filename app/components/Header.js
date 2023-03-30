import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();
    const { pathname } = router;
    const list = [{ title: 'Home', path: '/' }, { title: 'Service', path: '/service' }, { title: 'Blog', path: '/blog' }, { title: 'About us', path: '/about' }, { title: 'Contact us', path: '/contact' }];
    return (
        <>
            <Container fluid className='fixed-top bg-white header'>
                <Row>
                    <Col xs={12} className='p-0 d-flex justify-content-around'>
                        <Link href='/' className='d-block py-1'><img src='/logo.png' alt='logo' className='d-block w-75 mx-auto' /></Link>
                        <ul className='p-0 m-0 d-flex justify-content-center align-items-center'>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li className='mx-3' key={index.toString()}>
                                            <Link href={`${item.path}`} className={`d-block px-2 text-reset text-decoration-none ${pathname === item.path && 'current-page'}`}>{item.title}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container id='top' fluid className='opacity-0 header shadow-none'>
                <Row>
                    <Col xs={12} className='p-0 d-flex justify-content-around'>
                        <Link href='/' className='d-block py-1'><img src='/logo.png' alt='logo' className='d-block w-75 mx-auto' /></Link>
                        <ul className='p-0 m-0 d-flex justify-content-center align-items-center'>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li className='mx-3' key={index.toString()}>
                                            <Link href={`${item.path}`} className={`d-block px-2 text-reset text-decoration-none ${pathname === item.path && 'current-page'}`}>{item.title}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;