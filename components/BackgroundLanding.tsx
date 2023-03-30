import Image from "next/image";
import bgDrawnLine from "@/public/images/drawn-line-background-car-rental.png";
import styles from "@/styles/Background.module.css";

const BackgroundLanding = (): JSX.Element => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.bgWrap}>
        <Image src={bgDrawnLine} alt="background" fill quality={70} />
      </div>
    </section>
  );
};

export default BackgroundLanding;
