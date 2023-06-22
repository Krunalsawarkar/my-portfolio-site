import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Working Year</h3>
        <span className="about__subtitle">1</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Technology</h3>
        <span className="about__subtitle">2</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Projects Completed</h3>
        <span className="about__subtitle">4</span>
      </div>
    </div>
  );
};

export default Info;
