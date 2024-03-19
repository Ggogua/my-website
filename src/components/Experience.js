import React from "react";
import styles from "../styles/Header.module.css";

const Experience = () => {
  return (
    <div className={styles.HeaderContainer} id="experience">
      <div className={styles.HeaderWrapper}>
        <div className={styles.About}>
          <span className={styles.SectionTitle}>WORK EXPERIENCE</span>
          <div>
            <div>
              <p className={styles.WorkName}>
                <span className={styles.HeadText}>2021 | Vezir</span> - UX/UI
                Designer
              </p>
              <ul>
                <li className={styles.WorkText}>
                  Create wireframes and prototypes to visualize design concepts.
                </li>
                <li className={styles.WorkText}>
                  Collaborate with developers to ensure implementation matches
                  design.
                </li>
                <li className={styles.WorkText}>
                  Iterate designs based on user feedback and testing.
                </li>
                <li className={styles.WorkText}>
                  Maintain consistency across the user interface for a seamless
                  experience.
                </li>
              </ul>
            </div>
            <div className={styles.ListWork}>
              <p className={styles.WorkName}>
                <span className={styles.HeadText}>2022 | Zarapkhana</span> - Web
                Designer
              </p>
              <ul>
                <li className={styles.WorkText}>
                  Design visually appealing and responsive website layouts.
                </li>
                <li className={styles.WorkText}>
                  Choose colors, fonts, and imagery to enhance user experience.
                </li>
                <li className={styles.WorkText}>
                  Use coding languages to bring designs to life.
                </li>
                <li className={styles.WorkText}>
                  Test designs for usability and make improvements.
                </li>
                <li className={styles.WorkText}>
                  Optimize website performance for better user engagement.
                </li>
              </ul>
            </div>
            <div className={styles.ListWork}>
              <p className={styles.WorkName}>
                <span className={styles.HeadText}>2023 | 5G Academy</span> - Web
                Developer
              </p>
              <ul>
                <li className={styles.WorkText}>
                  Utilize Node.js for server-side operations if required.
                </li>
                <li className={styles.WorkText}>
                  Evaluate and choose the most suitable library for graph
                  navigation.
                </li>
                <li className={styles.WorkText}>
                  Implement graph visualization using Cytoscape.js.
                </li>
                <li className={styles.WorkText}>
                  Develop dynamic graph functionalities.
                </li>
                <li className={styles.WorkText}>
                  Design and create intuitive graphical user interfaces (GUIs).
                </li>
                <li className={styles.WorkText}>
                  Integrate with external APIs to fetch data dynamically,
                  enabling real-time updates and interaction within the web
                  application.
                </li>
                <li className={styles.WorkText}>
                  Documenting changes, enhancements, and optimizations made to
                  the application, ensuring transparency and facilitating
                  collaboration among team members.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
