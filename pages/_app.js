import Head from 'next/head';
import { Footer, Navbar } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <main className="bg-primary-black overflow-hidden">
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
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
