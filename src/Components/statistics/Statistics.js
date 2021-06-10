import React from "react";
import style from "./Statistics.module.css";
const Section = ({ children, title }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.statistics - title}>{title.toUpperCase()}</h2>
      {children}
    </section>
  );
};

export default Section;
