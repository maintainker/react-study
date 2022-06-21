import React from "react";

function App() {
  return React.createElement(
    "div",
    { className: "test", id: "id-test", style: { background: "red" } },
    "div입니다."
  );
}

export default App;

// 감싸인 요소로 해야하는 이유는 createElement라는 함수로 변형시켜야 하기때문입니다.
// 자바스크립트에 class가 있기때문에 그거와 혼동될 여지가 있어 className으로 변경했습니다. (클래스 컴포넌트 때문)
// children은 저 함수는 children을 string으로 변형시켜 xml로 만들기 때문에 html에 직접 들어간다고 생각하면 됩니다. 따라서 주석도 html로
