// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/style.module.css';

const Layout = ({ children,includeNavigation=true,includeFooter=true }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="" />
      </Head>
      <header>
        <div className="logo">
          <h1 className={`logo-text ${styles.logoText}`}>
            <span>Swahilipot</span> News and Blogs
          </h1>
        </div>
        {/* Add your navigation here */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
