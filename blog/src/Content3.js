import "./Content.css";
import { useState } from "react";

function Content3() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const like1 = () => {
    setCount1(count1 + 1);
    console.log(count1);
  };

  const like2 = () => {
    setCount2(count2 + 1);
    console.log(count2);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>
            React 개발환경 설정
            <span onClick={like1}>👍</span> {count1}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={like2}>👍</span> {count2}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content3;
