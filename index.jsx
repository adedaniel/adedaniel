import React from "react";
import { Developer } from "human-professions";
import { sleeping, happy, rich, coding } from "human-states";

export default function Daniel() {
  return (
    <Developer
      devName="Adetola Daniel"
      devType="Frontend"
      active="Looking for a remote job"
      pronouns={"He" || "Him"}
      devHobbies={["Music", "Football", "Coding"]}
      askDevAbout={["React", "Design", "Basemailer", "Telecommunications"]}
      presentDevActivity="Using state and props to change the world🔥"
      style={{
        backgroundColor: "chocolate",
        backgroundSize: "contain",
        display: rich ? "flex" : "initial",
        flexDirection: sleeping ? "row" : "column",
        cursor: sleeping ? "wait" : "progress",
        overflow: happy ? "visible" : "inherit",
        position: coding ? "fixed" : "relative",
      }}
    />
  );
}
