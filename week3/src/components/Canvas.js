import { useRef, useState } from "react";

const Canvas = () => {
  const [isDrawed, setIsDrawed] = useState(false);
  const canvasRef = useRef();
  const drawCircle = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI * 2);
    ctx.stroke();
  };
  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 800, 600);
  };
  const handleDraw = () => {
    if (!isDrawed) drawCircle();
    if (isDrawed) clearCanvas();
    setIsDrawed((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleDraw}>{isDrawed ? "지우기" : "그리기"}</button>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ background: "#dcdcdc" }}
      ></canvas>
    </div>
  );
};

export default Canvas;
