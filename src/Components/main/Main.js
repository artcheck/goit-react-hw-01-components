import React from "react";
import PropTypes from "prop-types";
import Profile from "../profile/Profile";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";
// import data from '../../data';
import userData from "../../data/userData.json";
import statisticsData from "../../data/statistical-data.json";

const Main = () => {
  return (
    <>
      <Section title="Profile">
        <Profile props={userData} />
      </Section>
      <Section title="Statistics">
        <Statistics statistic={statisticsData} title="Upload stats" />
      </Section>
    </>
  );
};

export default Main;
