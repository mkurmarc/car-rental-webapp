import Image from "next/image";
import styles from "./Layout.module.css";
import landingPageImage from "../public/images/car-rental-landing-page-combined.png";
import britishFlag from "../public/images/british-flag-logo.png";
import carRentalLogo from "../public/images/logo-car-rental.png";

const Navbar = (): JSX.Element => {
  return (
    <nav className={`${styles["nav__container"]}`}>
      <div className={`${styles["nav__left-container"]}`}>
        <Image
          className={`${styles["nav__logo"]}`}
          src={carRentalLogo}
          alt="car rental company logo"
          priority
        />
        <p>
          <a href="">Rental</a>
        </p>
        <p>
          <a href="car-rentals">Car Rental</a>
        </p>
        <p>
          <a href="">Carpool</a>
        </p>
      </div>
      <div className={`${styles["nav__right-container"]}`}>
        <p>
          <a href="">Login</a>
        </p>
        <p>
          <a href="">Car Rental</a>
        </p>
        <button>Sign Up</button>
        <Image
          className={`${styles["nav__flag"]}`}
          src={britishFlag}
          alt="car rental company logo"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
