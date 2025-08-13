import React, {useState} from "react";

function ToggleCheck (){
  const [check, setCheck] = useState(true);

  function checkClick (){
    // const check = window.confirm("확인하시겠습니까?");
    setCheck(check);
  }
  
  return (
      <button onClick={checkClick} disabled={!check}>
        {check ? "확인하기" : "확인됐음"}
      </button>
  )

}
export default ToggleCheck;