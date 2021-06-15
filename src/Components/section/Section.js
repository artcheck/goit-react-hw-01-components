import React from "react";
import style from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <section className={style.section}>
      <h2 className={style.section_title}>{title.toUpperCase()}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  children: PropTypes.string,
  title: PropTypes.string,
};
export default Section;
