import { useRef, useState } from "react";

const First = ({ num = 0 }) => {
  //js구간
  const [state, setState] = useState(0);
  const ref = useRef(0);
  let variable = 0;
  const addVar = () => {
    variable++;
    console.log(variable);
  };
  const addRef = () => {
    ref.current++;
  };
  return (
    <div>
      <ul>
        <li>props: {num}</li>
        <li>state: {state}</li>
        <li>ref: {ref.current}</li>
        <li>variable: {variable}</li>
      </ul>
      <button onClick={() => num++}>props</button>
      <button onClick={() => setState((prev) => prev + 1)}>state</button>
      <button onClick={addRef}>ref</button>
      <button onClick={addVar}>variable</button>
    </div>
  );
};

export default First;

/* 변수에는 총 4종류가 있습니다 (var, let , const 말고)
 - 상태(state)값, ref값, 프롭스(props), 일반변수
 - 상태값 -> 컴포넌트 내부상태에서 리랜더링 되어도 남아있고 상태값이 변하면 리랜더링 된다.
 - ref값 -> 컴포넌트가 리랜더링 되어도 남아있지만 ref값은 변하면 리랜더링 되지 않는다.
 - props -> 부모컴포넌트에서 값을 내려주지만 변경할 함수를 부모에서 내려주지 않는이상 변경이 불가능하다.
 - 일반 변수 -> 리랜더링 되면 값이 재선언 되지만 값이 변해도 리랜더링이 되지 않는다.
*/
