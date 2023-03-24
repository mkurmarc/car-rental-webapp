import Image from "next/image";
import landingImage from "@/public/images/car-rental-landing-page-combined.png";
import bgDrawnLine from "@/public/images/drawn-line-background-car-rental.png";
import styles from "@/styles/Background.module.css";

const BackgroundLanding = (): JSX.Element => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.bgWrap}>
        <Image src={bgDrawnLine} alt="background" fill quality={70} />
      </div>
      <div className={styles.bgWrap} style={{ left: "0", top: "15rem" }}>
        <Image
          src={landingImage}
          placeholder="blur"
          alt="landing page image"
          priority
        />
      </div>
    </section>
  );
};

export default BackgroundLanding;
