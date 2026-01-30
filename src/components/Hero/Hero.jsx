import React from 'react';

import styles from './Hero.module.css';

import StyledLink from '../StyledLink/StyledLink';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container hero">
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <StyledLink
            to="/catalog"
            className={styles.viewBtn}
            text="View Catalog"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
