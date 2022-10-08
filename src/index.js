//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let message;

const date = new Date();
const current_time = date.getHours();

const customstyle = {
  color: " "
};

if (current_time < 12) {
  message = "Good Morning";
  customstyle.color = "yellow";
} else if (current_time < 18) {
  message = "Good Evening";
  customstyle.color = "orange";
} else {
  message = "Good NIght";
  customstyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customstyle}>
      {" "}
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
