import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import BackgroundLanding from "@/components/BackgroundLanding";
import landingImage from "@/public/images/car-rental-landing-page-combined.png";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
type FormEventHandler = React.FormEventHandler<HTMLFormElement>;

const Home = (): JSX.Element => {
  const [location, setLocation] = React.useState<string | null>(
    "Los Angeles, CA"
  );

  const onSubmitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    // setState(event.target.elements.)
  };

  const onChangeHandler: ChangeEventHandler = (event): void => {
    const userLocationSelection = event.target.value;
    setLocation(userLocationSelection);
  };

  return (
    <Layout>
      <section className={styles.sectionWrap}>
        <div className={styles.sectionElem}>
          <Image
            src={landingImage}
            className={styles.landingPageImg}
            placeholder="blur"
            alt="landing page image"
            width="700"
            height="875"
            quality="80"
            priority
          />
        </div>
        <div className={styles.sectionElem}>
          <h1 className={styles.sectionHeader}>
            Share a car and help take care of the planet
          </h1>
          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
              <div className={styles.flexCol}>
                <label htmlFor="locationInput">Where do you need a car</label>
                <input
                  id="locationInput"
                  name="locationInput"
                  type="text"
                  placeholder="Los Angeles, CA"
                  onChange={onChangeHandler}
                  autoFocus
                />
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="pickupDate">Pickup</label>
                <input
                  type="datetime-local"
                  name="pickupDate"
                  id="pickupDate"
                />
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="returnDate">Return</label>
                <input
                  type="datetime-local"
                  name="returnDate"
                  id="returnDate"
                />
              </div>
              <button type="submit">Search Car</button>
            </form>
          </div>
          <h3>More efficient mobility possible.</h3>
          <p>
            25% of CO2 emissions come from transport and the number of cars on
            the streets increases every day.
          </p>
          <p>
            Our main mission is to help improve the environment and create more
            efficient and sustainable mobility. For this reason, we offer 3
            different solutions that allow you to share a car with family and
            friends.
          </p>
        </div>
      </section>
      <BackgroundLanding />
    </Layout>
  );
};

export default Home;
