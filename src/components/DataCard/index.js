import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function DataCard(props) {
  function convertNo(num) {
    num = num.toString();
    let last = "";
    if (num.length > 3) {
      last = num.substring(num.length - 3);
    } else return num;
    num = Math.floor(num / 1000);
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",") + `,${last}`;
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: `#${props.bgcolor}`, color: `${props.color}` }}
    >
      <div className="card-title"> {props.title} </div>
      <div
        className="break"
        style={{ backgroundColor: `${props.color}` }}
      ></div>

      {props.show === "heart" ? (
        <i className="fas fa-heart fa-3x case-logo" />
      ) : props.show === "hosp" ? (
        <i className="fas fa-hospital fa-3x case-logo" />
      ) : props.show === "dead" ? (
        <i className="fas fa-cross fa-3x case-logo" />
      ) : props.show === "conf" ? (
        <i className="fas fa-virus fa-3x case-logo" />
      ) : null}

      <div className="cases">{props.value ? convertNo(props.value) : null}</div>
      <div
        className="break"
        style={{ backgroundColor: `${props.color}` }}
      ></div>
    </div>
  );
}

export default DataCard;
