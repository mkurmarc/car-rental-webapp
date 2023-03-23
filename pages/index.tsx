import Image from "next/image";
import landingPageImage from "../public/images/car-rental-landing-page-combined.png";
import bgDrawnLine from "../public/images/drawn-line-background-car-rental.png";
import Layout from "../components/Layout";
import styles from "pages/Layout.module.css";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <section className={styles.sectionContainer}>
        <Image
          className={styles.sectionContainerBig}
          src={landingPageImage}
          alt="landing page image"
          width={180}
          height={37}
          priority
        />
        <Image
          src={bgDrawnLine}
          alt="background image"
          width={180}
          height={37}
          priority
        />
      </section>
    </Layout>
  );
};

export default Home;
