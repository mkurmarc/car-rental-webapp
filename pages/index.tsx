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
      <div className={styles.bgWrap} style={{ left: "0", top: "15rem" }}>
        <Image
          src={landingImage}
          placeholder="blur"
          alt="landing page image"
          priority
        />
      </div>
      <h1>Share a car and help take care of the planet</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          id="locationInput"
          type="text"
          placeholder="Los Angeles, CA"
          onChange={onChangeHandler}
          autoFocus
        />
        <input type="datetime-local" name="pickupDate" id="pickupDate" />
        <input type="datetime-local" name="dropoffDate" id="dropoffDate" />

        <button type="submit">Search Car</button>
      </form>
      <h3>More efficient mobility possible.</h3>
      <p>
        25% of CO2 emissions come from transport and the number of cars on the
        streets increases every day.
      </p>
      <p>
        Our main mission is to help improve the environment and create more
        efficient and sustainable mobility. For this reason, we offer 3
        different solutions that allow you to share a car with family and
        friends.
      </p>
      <BackgroundLanding />
    </Layout>
  );
};

export default Home;
