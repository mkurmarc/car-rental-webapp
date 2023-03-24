import Image from "next/image";
import landingPageImage from "../public/images/car-rental-landing-page-combined.png";
import bgDrawnLine from "../public/images/drawn-line-background-car-rental.png";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <section className={styles.sectionContainer}>
        <div className={styles.bgWrap}>
          <Image src={bgDrawnLine} alt="background" priority />
        </div>
        <div>
          <Image
            className={styles.sectionContainerBig}
            src={landingPageImage}
            placeholder="blur"
            alt="landing page image"
            priority
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
