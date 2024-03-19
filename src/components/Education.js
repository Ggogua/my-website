import React from "react";
import styles from "../styles/Header.module.css";
import REVIVO from "../assets/REVIVO.pdf";
import UX from "../assets/UX.pdf";
import UXUI from "../assets/UXUI.pdf";
import Javacsript from "../assets/Javascript.pdf";

const Education = () => {
  return (
    <div className={styles.HeaderContainer} id="education">
      <div className={styles.HeaderWrapper}>
        <div className={styles.About}>
          <span className={styles.SectionTitle}>EDUCATION</span>
          <div>
            <ul>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>
                  Business and Technology University
                </span>{" "}
                - Informational Technologies
              </li>
              <ul>
                <li className={styles.Degree}>
                  Bachelor's Degree | 2019 - 2024
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Coursera &amp; Google</span> -
                UX Design
              </li>
              <ul>
                <li className={styles.Degree}>UX Design | 2022 </li>
                <a href={UX} download="UX-Design">
                  <button className={styles.DownloadBtn}>
                    {" "}
                    Download Certificate
                  </button>
                </a>
              </ul>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>
                  Academy of Digital Industries
                </span>{" "}
                - UI/UX Design
              </li>
              <ul>
                <li className={styles.Degree}>UI/UX Design | 2022 </li>
                <a href={UXUI} download="UXUI-Design">
                  <button className={styles.DownloadBtn}>
                    {" "}
                    Download Certificate
                  </button>
                </a>
              </ul>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>
                  Academy of Digital Industries
                </span>{" "}
                - Javacsript
              </li>
              <ul>
                <li className={styles.Degree}>Vanilla JS, ReactJS | 2023 </li>
                <a href={Javacsript} download="Javascript">
                  <button className={styles.DownloadBtn}>
                    {" "}
                    Download Certificate
                  </button>
                </a>
              </ul>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>
                  University of Naples Federico II
                </span>{" "}
                - Computer Science
              </li>
              <ul>
                <li className={styles.Degree}>RE.VIVO | 2023 - 2024</li>
                <a href={REVIVO} download="Web-Developer">
                  <button className={styles.DownloadBtn}>
                    Download Certificate
                  </button>
                </a>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
