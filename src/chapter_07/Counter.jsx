import React, {useState, useEffect} from "react";

function Counter (props) {

  // useState가 [변수생성, 세터생성] = 초기값 지정; 까지 다 해줌
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);

  // useEffect : 메인이외의 것을 렌더링하고 싶다면 사용.
  useEffect(() => {
    // useEffect 한번 호출하고 할일 여러개 적어도 괜찮고, useEffect를 여러개 써도 됨.
    document.title = `총 ${count} 번 클릭했습니다.`;
    setMinus(minus - 1)
  }, [count]);

  return (
      <div>
        <button onClick={() => setCount(count+1)}>
          클릭
        </button>
        <p> 총 {count} 번 클릭 했습니다.</p>
        <p> 총 {minus} 번 마이너스.</p>
      </div>
  );
}
export default Counter;