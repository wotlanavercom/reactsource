import { useState } from "react";

export default function Animal() {
  // 상태변화 관리 변수 ==> useState()
  // btn : true, false
  // src : "./img/bg2.jpg", "./img/다운로드.jpg"
  // button 이 클릭되면 button : false, src : "./img/다운로드.jpg"
  // button 이 클릭되면 button : true, src : "./img/bg2.jpg"

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("../img/bg2.jpg");

  const onToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("../img/다운로드.jpg");
    } else {
      setBtn(true);
      setSrc("../img/bg2.jpg");
    }
  };

  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경</button>
      </div>
      ;
    </>
  );
}
