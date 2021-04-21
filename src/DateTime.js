import React from "react";

export default function DateTime(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    `0${hours}`;
  }
  let minutes = props.date.getminutes();
  if (minutes < 10) {
    `0${minutes}`;
  }

  return (
    <div>
      {day} | {hours}:{minutes}
    </div>
  );
}
