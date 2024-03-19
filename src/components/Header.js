import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import Goat from "../assets/me.jpg";
import CV from "../assets/CV.pdf";

const Header = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDiscordClick = () => {
    const content = "#mycatdex";
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setCopyStatus("Saved");
        setTimeout(() => {
          setCopyStatus("");
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy content:", error);
      });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.HeaderContainer}>
      <div className={styles.HeaderWrapper}>
        <div className={styles.NavLinks}>
          <a href="#skills" onClick={scrollToSection}>
            Skills
          </a>
          <a href="#experience" onClick={scrollToSection}>
            Experience
          </a>
          <a href="#education" onClick={scrollToSection}>
            Education
          </a>
          <a href="#projects" onClick={scrollToSection}>
            Projects
          </a>
        </div>
        <div className={styles.About}>
          <div className={styles.InfoWrapper}>
            <div className={styles.NameProf}>
              <span>Giorgi Gogua</span>
              <span className={styles.SubTitle}>Web Developer</span>
            </div>
            <div className={styles.ContactWrapper}>
              <ul className={styles.ContactInfo}>
                <li className={styles.Description}>
                  As a front-end developer, I have years of experience crafting
                  user-friendly interfaces. I've worked with both local and
                  international companies, translating design ideas into
                  functional code. My passion for software development keeps me
                  updated with the latest technologies. Whether collaborating
                  locally or abroad, I focus on delivering innovative solutions
                  for an enhanced user experience.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "8px" }}
                  />
                  giorgiggogua@gmail.com
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "8px" }}
                  />
                  +995 577585002
                </li>
                <div className={styles.SocialIcons}>
                  <a
                    href="https://github.com/Ggogua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/giorgiggogua/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <span
                    onClick={handleDiscordClick}
                    onMouseEnter={() =>
                      setCopyStatus("Click to copy my Discord")
                    }
                    onMouseLeave={() => setCopyStatus("")}
                    role="button"
                    tabIndex="0"
                  >
                    <img src={discord} alt="discord" />
                  </span>
                  {copyStatus && (
                    <div className={styles.CopyStatus}>{copyStatus}</div>
                  )}
                </div>
              </ul>
            </div>
            {showScrollToTop && (
              <div className={styles.ScrollToTop} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            )}
          </div>
        </div>
        <div className={styles.PhotoWrapper}>
          <div className={styles.PhotoSection}>
            <a href={CV} download="Giorgi_Gogua_CV.pdf">
              <button>Download CV</button>
            </a>
            <img
              src={Goat}
              alt="Greatest of all time"
              className={styles.GoatPic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default Header;
