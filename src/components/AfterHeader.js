import React from "react";
import styles from "../styles/Header.module.css";

const AfterHeader = () => {
  const skills = [
    { name: "Javascript", year: 2022 },
    { name: "ReactJS", year: 2023 },
    { name: "HTML", year: 2022 },
    { name: "CSS", year: 2022 },
    { name: "SASS", year: 2022 },
    { name: "Tailwind", year: 2022 },
    { name: "NodeJS", year: 2022 },
    { name: "Typescript", year: 2023 },
    { name: "NextJS", year: 2023 },
    { name: "mySQL", year: 2021 },
    { name: "C++", year: 2021 },
    { name: "Git", year: 2022 },
    { name: "Github", year: 2022 },
    { name: "PHP", year: 2023 },
    { name: "Figma", year: 2022 },
    { name: "Adobe PS", year: 2020 },
    { name: "Adobe AI", year: 2020 },
    { name: "Adobe AE", year: 2020 },
    { name: "Visual Studio", year: 2021 },
    { name: "Visual Code", year: 2021 },
    { name: "Unreal Engine", year: 2020 },
    { name: "Unity", year: 2020 },
  ];

  return (
    <div className={styles.HeaderContainer} id="skills">
      <div className={styles.HeaderWrapper}>
        <div className={styles.About}>
          <span className={styles.SectionTitle}> SKILLS </span>{" "}
          <div>
            <ul className={styles.List}>
              {skills.map((skill, index) => (
                <li key={index} className={`${styles.ListItem} fade-in`}>
                  <span className={styles.FirstWord}>{skill.name}</span> - From{" "}
                  {skill.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHeader;
