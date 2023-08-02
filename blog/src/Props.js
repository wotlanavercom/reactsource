function Props(props) {
  // 넘겨받은 값 수정 가능?
  // Cannot assign to read only property 'value'
  // props.value += "form App.js";

  // 새로운 변수 선언 후 변경
  let props_value = props.value + " form App.js";
  return <div>{props_value}</div>;
}

export default Props;
