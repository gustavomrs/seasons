import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "Burr, it is Chilly",
    iconName: "snowflake"
  },
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun"
  }
};

const getSesason = lat => {
  const currentMonth = new Date().getMonth();

  if (currentMonth > 2 && currentMonth < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "sumer";
  }
};

const SeasoDisplay = props => {
  const season = getSesason(props.lat);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasoDisplay;
