import Image from 'next/image';
import classes from '../../styles/components/home-page/hero.module.css';

const Hero = (): JSX.Element => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An Image showing max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Umer</h1>
      <p>I blog about web development - especially React, and Node.js</p>
    </section>
  );
};

export default Hero;
