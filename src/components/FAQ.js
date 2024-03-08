import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-heading">FAQ</h2>
      <div className="faq-item">
        <input type="checkbox" id="faq1" className="faq-toggle" />
        <label htmlFor="faq1" className="faq-question">
          What is a hackathon?<span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">
          A hackathon is social coding event where programmers, designers and
          developers collaborate to solve a problem and compete for cash prizes.
          Hackathons are a super-condensed learning experience and the time
          constraint helps you to break your shell to build something from the
          ground up with teamwork and harmony.
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq2" className="faq-toggle" />
        <label htmlFor="faq2" className="faq-question">
          Why would someone participate in a hackathon?
          <span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">
          People participate in hackathons for lots of reasons: the challenge,
          the creative outlet, the community collaboration, the networking, and
          swags. The plethora of problem statements act as a juggernaut for
          participants and keeps them on the edge of their seats.
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq3" className="faq-toggle" />
        <label htmlFor="faq3" className="faq-question">
          Who can participate? Are there any prerequisites?
          <span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">
          We welcome and encourage anyone with ideas, programming skills, and
          enthusiasm to participate in this event! However you need to be
          enrolled in an undergraduate program.
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq4" className="faq-toggle" />
        <label htmlFor="faq4" className="faq-question">
          Do I need a team?
          <span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">
          Yes, you do need a team to participate in this event. A maximum of 4
          team members and a minimum of 2 members is allowed.
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq5" className="faq-toggle" />
        <label htmlFor="faq5" className="faq-question">
          Will I get a participation certificate?
          <span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">
          Yes, all participants will get a participation certificate.
        </div>
      </div>
      <div className="faq-item">
        <input type="checkbox" id="faq6" className="faq-toggle" />
        <label htmlFor="faq6" className="faq-question">
          Can I submit a pre-made project?
          <span className="plus-sign">+</span>
        </label>
        <div className="faq-answer">You are supposed to build your project in the designated 12 hours.</div>
      </div>
    </div>
  );
};

export default FAQ;
