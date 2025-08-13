import React from "react";
import Commentt from "./Commentt";

const comments = [
  {
    name: "정사랑",
    comment : "고양이 귀여워."
  },
  {
    name: "김지유",
    comment : "구내식당 맛있을까요?"
  },
  {
    name: "박현정",
    comment : "배고푸ㅡ고 졸립고 푸워요 축축이."
  }
];

function CommenttList(props){
  return (
      <div>
        {/*<Commentt name={"이끼끼"} comment={"내가 만든 컴포넌트입니다."} />*/}
        {/*<Commentt name={"이끼끼끼"} comment={"내가 만든 컴포넌트입니다.2"} />*/}
        {/*<Commentt name={"이끼끼끼끼"} comment={"내가 만든 컴포넌트입니다.3"} />*/}
        {comments.map((c ) =>
          {
            return (
                <Commentt name={c.name} comment={c.comment} />
            );
          }
        )}
      </div>
  );
}
export default CommenttList