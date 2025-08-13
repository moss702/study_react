import React from "react";

function formatDate(date) {

}

function Date(props){
  return (
      <div className={"comment-date"}>
        {formatDate(props.date)}
      </div>
  );
}
export default Date;
