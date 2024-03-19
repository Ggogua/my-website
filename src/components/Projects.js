import React from "react";
import styles from "../styles/Header.module.css";

const Projects = () => {
  return (
    <div className={styles.HeaderContainer} id="projects">
      <div className={styles.HeaderWrapper}>
        <div className={styles.About}>
          <span className={styles.SectionTitle}> PROJECTS </span> <div></div>
          <div>
            <ul className={styles.ProjectsList}>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Post.it</span>- This idea was
                created entirely by me. It serves as a platform to showcase my
                skills. Website is for posting with distinguished UI. |{" "}
                <a href="https://mustpostit.netlify.app" target="_blank">
                  <span className={styles.WebsiteLink}>Visit POST-IT</span>
                </a>
              </li>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Snake</span> - Snake game for
                Portfolio. It has simple UI and in the game you must eat dots to
                become longer to win the game |{" "}
                <a
                  href="https://ggogua.github.io/simple-snake/"
                  target="_blank"
                >
                  <span className={styles.WebsiteLink}>Visit Snake</span>
                </a>
              </li>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Orginizer Online</span> - It's
                an online organizer, where you can create an account and plan
                your day. |{" "}
                <a href="https://organizeyou.netlify.app" target="_blank">
                  <span className={styles.WebsiteLink}>
                    <br />
                    Visit Orginizer
                  </span>
                </a>
              </li>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Camera Chat</span> - The web
                camera chat prototype |{" "}
                <a href="https://ggogua.github.io/camchat/" target="_blank">
                  <span className={styles.WebsiteLink}>
                    <br />
                    Visit Camchat
                  </span>
                </a>
              </li>
              <li className={styles.WorkName}>
                <span className={styles.HeadText}>Password Generator</span> -
                Using command you can generate password, which will be saved
                inside the notepad. |{" "}
                <a
                  href="https://github.com/Ggogua/strong-passowrd-generator.git"
                  target="_blank"
                >
                  <span className={styles.WebsiteLink}>
                    <br />
                    Visit Generator
                  </span>
                </a>
              </li>
              <li className={styles.WorkNameLast}>
                <span className={styles.HeadTextLast}>More on the way...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
