import React from "react";

function Button(props) {
  const color = props.color
  const textColor = props.textColor
  return (
    <button
      onClick={props.onClick}
      onKeyUp={props.onKeyUp}
      className={`border-2 text-${color} border-${color} rounded-md px-4 py-2 hover:bg-${color} hover:text-${textColor}`}
    >
      {props.text}
    </button>
  );
}
Button.defaultProps = {
  text: "text",
};

export default Button;
