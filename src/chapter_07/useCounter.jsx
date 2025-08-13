import React, {useState} from "react";

// 커스텀 Hook 만들기
// 접두사 use : React가 Hook으로 인식함

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
  // Math.max(count - 1, 0) : count-1과 0 중에 더 큰 수 출력. 0 미만으로 내려가지 않도록 설정.

  return [count, increaseCount, decreaseCount];
}

export default useCounter;