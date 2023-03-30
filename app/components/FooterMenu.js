import Link from 'next/link';

function FooterMenu() {
    const list = [{ title: 'About Us', path: '/about' }, { title: 'Our Departments', path: '/departments' }, { title: 'Careers And Internships', path: '/internships' }, { title: 'Get Support', path: '/support' }, { title: 'Blog', path: '/blog' }, { title: 'Privacy Policy', path: '/privacy' }];
    return (
        <>
            {
                list.map((item, index) =>
                    <li key={index.toString()}><Link href={`${item.path}`} className='py-2 text-reset text-decoration-none'>{item.title}</Link></li>
                )
            }
        </>
    );
}

export default FooterMenu;