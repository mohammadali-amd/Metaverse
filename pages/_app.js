import Head from 'next/head';
import { Footer, Navbar } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <main className="bg-primary-black overflow-hidden">
    <Head>
      <title>Web Studio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer>
      <Footer />
    </footer>
  </main>
);

export default MyApp;
