import { useState } from "react";

export default function InputSample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText("")}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}
