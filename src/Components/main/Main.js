import React from "react";

import Profile from "../profile/Profile";
import Section from "../statistics/Statistics";

import userData from "../../data/user.json";

const Main = () => {
  return (
    <>
      <Section title="">
        <Profile props={userData} />
      </Section>
    </>
  );
};

export default Main;
