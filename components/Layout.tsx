import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Head>
        <title>Car Rental Web Application</title>
        <meta name="description" content="Website tobook rental cars" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
