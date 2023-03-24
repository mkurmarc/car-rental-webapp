import Image from "next/image";
import styles from "@/styles/Layout.module.css";
import britishFlag from "@/public/images/british-flag-logo.png";
import carRentalLogo from "@/public/images/logo-car-rental.png";

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLeftContainer}>
        <Image
          className={styles.navLogo}
          src={carRentalLogo}
          alt="car rental company logo"
          priority
        />
        <p>
          <a className={styles.navAnchor} href="">
            Rental
          </a>
        </p>
        <p>
          <a className={styles.navAnchor} href="car-rentals">
            Car Rental
          </a>
        </p>
        <p>
          <a className={styles.navAnchor} href="">
            Carpool
          </a>
        </p>
      </div>
      <div className={styles.navRightContainer}>
        <p>
          <a className={styles.navAnchor} href="">
            Login
          </a>
        </p>
        <p>
          <a className={styles.navAnchor} href="">
            Sign Up
          </a>
        </p>
        <button type="submit" className={styles.navBtn}>
          Rent Your Car
        </button>
        <Image
          className={styles.navFlag}
          src={britishFlag}
          alt="car rental company logo"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
