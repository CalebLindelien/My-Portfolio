import React from 'react';
import './about.css';
import AboutImg from '../../assets/assets/calebLindelien.jpeg';
import CV from '../../assets/assets/Caleb-Lindelien-Resume.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Software engineer/developer. Attending a engineering program
            provided me with a wealth of experience in a relatively short period
            of time. I've learned from professional mentors and instructors
            about industry best practices, as well as collaboration with
            colleagues via GitHub. Overall, the experience provided me with a
            strong foundation in software development and has helped me to
            continue to expand my horizons.
          </p>
          <a
            download=""
            href={CV}
            className="button button--flex about__button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
