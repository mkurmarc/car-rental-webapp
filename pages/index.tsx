import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import landingPageImage from "../public/images/car-rental-landing-page-combined.png";
import bgDrawnLine from "../public/images/drawn-line-background-car-rental.png";

const inter = Inter({ subsets: ["latin"] });

const Home = (): JSX.Element => {
  return (
    <section style={{ backgroundColor: "white" }}>
      <Image
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
  );
};

export default Home;
