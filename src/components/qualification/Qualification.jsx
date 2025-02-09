import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="qualification section" id="about">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <AnimatePresence mode="wait">
            {toggleState === 1 && (
              <motion.div
                key="education"
                className="qualification__content qualification__content-active"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Computer Science
                    </h3>
                    <span className="qualification__subtitle">
                      of Norton University
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2022 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">
                      Higher School Diploma
                    </h3>
                    <span className="qualification__subtitle">
                      Of Chakangre High School
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Dec - 2021
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {toggleState === 2 && (
              <motion.div
                key="experience"
                className="qualification__content qualification__content-active"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Merchant Service Office (MSO)
                    </h3>
                    <span className="qualification__subtitle">
                      Canadia Bank Plc
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2023 - 2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Animation Script Writer</h3>
                    <span className="qualification__subtitle">
                      Annex Digital Cambodia
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2022 - 2023
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
