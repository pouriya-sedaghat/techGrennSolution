import Header from '/components/Header';
import Footer from '/components/Footer';

function LayOut({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LayOut;