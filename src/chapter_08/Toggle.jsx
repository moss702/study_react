import React, {useState} from "react";

// 이벤트 처리
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(false);

  // a) 함수 안에 함수 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // b) 함수를 대입한 변수 정의
  // const handleClick = () => {
  //   setIsToggleOn((isToggleOn) => !isToggleOn);
  // }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "O N" : "OFF"}
    </button>
  );

}

export default Toggle;