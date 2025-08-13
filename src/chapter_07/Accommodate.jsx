import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; // 정원은 10명

function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("============================");
    console.log("useEffect() is called .... ");
    console.log(`isFull : ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]); // count가 바뀔때만 count >= MAX_CAPACITY 비교.

  return (
      <div style = {{padding : 16}}>
        <p>{`총 ${count} 명 탑승 했습니다.`}</p>

        <button onClick={increaseCount} disabled={isFull}>
          입장
        </button>

        <button onClick={decreaseCount}>
          퇴장
        </button>

        {isFull && <p style={{color: "red"}}> 정원이 가득 찼습니다.</p>}
      </div>
  )
}
export default Accommodate;
