import React, { useState } from "react";
import "./outcomes.css";
import { Element } from "react-scroll";

const Outcomes = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Element className="outcomes section" id="outcomes">
      <h2 className="section__title">Outcomes</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="outcomes__container container grid">
        
        <div className="outcomes__content">
          <div>
            <i className="uil uil-web-grid outcomes__icon"></i>
            <h3 className="outcomes__title">React.js/ <br /> React Native</h3>
          </div>
          <span className="outcomes__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">React.js/ React Native</h3>
              <p className="outcomes__modal-description">
                I am skilled in frontend development with expertise in React.js,
                React Native and Next.js. These technologies empower me to build
                modern and interactive web applications with ease.
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Single Page Application
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    State managment using Redux Toolkit and Saga
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">Dynamic Functionality</p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Reusable and Dynamic Components
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Server Side Rendering and Client Side Rendering Apps
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outcomes__content">
          <div>
            <i className="uil uil-arrow outcomes__icon"></i>
            <h3 className="outcomes__title">App Development</h3>
          </div>
          <span className="outcomes__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">App Development</h3>
              <p className="outcomes__modal-description">
                I am skilled in web and app development, with expertise in
                React.js for web applications and React Native for mobile
                applications. leveraging my skills in software development
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Dynamic Web and Mobile App
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Responsive and user-friendly UI
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Backend Support with database managment
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">Optimization for SEO</p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Easy to understand coding
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outcomes__content">
          <div>
            <i className="uil uil-palette outcomes__icon"></i>
            <h3 className="outcomes__title">UI Designs</h3>
          </div>
          <span className="outcomes__button"  onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">UI Designs</h3>
              <p className="outcomes__modal-description">
                I have a strong passion for UI design, which complements my
                frontend development skills. I believe that a well-designed user
                interface is crucial for creating engaging and intuitive digital
                experiences.
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Clean and ellegant designs for application
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Enhanced usablity and user experience
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Utilizing tools such as Adobe XD and Figma
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Color theory, typography
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Clean ui friendly layout
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outcomes__content">
          <div>
            <i className="uil uil-github-alt outcomes__icon"></i>
            <h3 className="outcomes__title">Version Control</h3>
          </div>
          <span className="outcomes__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 4 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">Version Control</h3>
              <p className="outcomes__modal-description">
                I possess strong skills in Git and GitHub, essential tools for
                version control and collaboration in software development
                projects.
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Contribute to projects effectively
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Organized development workflow
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Manage different versions of code
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Collaborate with other developers effectively
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Ensure code quality, traceability, and efficient
                    collaboration{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outcomes__content">
          <div>
            <i className="uil uil-box outcomes__icon"></i>
            <h3 className="outcomes__title">Node.js/ Express.js</h3>
          </div>
          <span className="outcomes__button" onClick={() => toggleTab(5)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 5 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">Node.js/ Express.js</h3>
              <p className="outcomes__modal-description">
                With my expertise in Node.js and Express.js, I can develop
                efficient and reliable server-side components, enabling the
                creation of dynamic and data-driven web applications that
                deliver exceptional user experiences.
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">Real-time applications</p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Handle requests and responses
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Implement authentication and authorization{" "}
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">RESTful APIs</p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Data-driven web applications
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outcomes__content">
          <div>
            <i className="uil uil-database outcomes__icon"></i>
            <h3 className="outcomes__title">Database Managment</h3>
          </div>
          <span className="outcomes__button" onClick={() => toggleTab(6)}>
            View More
            <i className="uil uil-arrow-right outcomes__button-icon"></i>
          </span>

          <div className={toggleState === 6 ? "outcomes__modal active-modal" : "outcomes__modal"}>
            <div className="outcomes__modal-content">
              <i className="uil uil-times outcomes__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="outcomes__modal-title">Database Managment</h3>
              <p className="outcomes__modal-description">
                I have a strong proficiency in managing databases using MySQL
                and MongoDB, two popular database management systems used in
                modern web development.
              </p>
              <ul className="outcomes__modal-services grid">
                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Filtering, sorting, joining, and aggregating data
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">CRUD Operation</p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Effectively handle large vol. of data
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Ensuring data consistency, security
                  </p>
                </li>

                <li className="outcomes__modal-service">
                  <i className="uil uil-check-circle outcomes__modal-icon"></i>
                  <p className="outcomes__modal-info">
                    Document-oriented database
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Outcomes;
