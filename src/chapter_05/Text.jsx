import React from "react";

function Text (props){
  return (
      <div className={"comment-text"}>
        {props.text}
      </div>
  );
}

export default Text;