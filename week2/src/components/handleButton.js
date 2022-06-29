import { useRef, useEffect } from "react";

const ButtonSection = ({ alertMessage }) => {
  const buttonRef = useRef();
  const button1 = document.querySelector(".dont-use");
  button1?.addEventListener("click", () => {
    alert(alertMessage + " 1번클릭");
  });
  const handleClick2 = () => {
    alert(alertMessage + " 2번클릭");
  };
  useEffect(() => {
    buttonRef.current.addEventListener("click", () => alert("3번클릭"));
  }, []);

  return (
    <section>
      <button className="dont-use">사용불가</button>
      <button className="dont-use" onClick={handleClick2()}>
        사용불가
      </button>
      <button className="can-use" ref={buttonRef}>
        사용가능
      </button>
      <button className="can-use" onClick={handleClick2}>
        사용가능
      </button>
    </section>
  );
};
export default ButtonSection;
