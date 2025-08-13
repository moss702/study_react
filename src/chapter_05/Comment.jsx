import React from "react";
import Avatar from "./Avartar";
import Text from "./Text";
import Date from "./Date";

function Comment(props){
  return(
      <div className={"comment"}>
        <div className={"user-info"}>
          <Avatar user={props.author} />
          <div className={"user-info-name"}>
            {props.author.name}
          </div>
        </div>
        <Text text={props.text} />
        <Date date={props.date} />
      </div>
  );
}
export default Comment;