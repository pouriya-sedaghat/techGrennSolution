import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/globals.scss';
import LayOut from '/layout';

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
