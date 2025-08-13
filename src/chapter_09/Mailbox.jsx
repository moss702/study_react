import React from "react";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return(
      <div>
        <h1>안녕하세요!</h1>
        {/*읽지않은 메시지의 길이가 1개 미만이라면 뒤는 출력되지않음*/}
        {unreadMessages.length > 0 && <h2>현재 {unreadMessages.length} 개의 읽지않은 메시지가 있습니다.</h2>}
      </div>
  );
}
export default Mailbox;