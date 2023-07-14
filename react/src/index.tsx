import { ReactUnity, render, useGlobals } from "@reactunity/renderer";
import "./index.scss";
import { useRef, useState } from "react";

function App() {
  // ReactUnity 初期化
  const globals = useGlobals();
  const boardMovement = globals.Board.GetComponent("BoardMovement");

  // 回転速度の設定
  const [rotationSpeed, SetRotationSpeed] = useState(
    boardMovement.RotationSpeed
  );
  const handleRotationSpeed = (speedValue) => {
    SetRotationSpeed(speedValue);
    boardMovement.RotationSpeed = speedValue;
  };

  return (
    <scroll>
      <text>{rotationSpeed}</text>
      <button
        className="plus"
        onClick={() => handleRotationSpeed(rotationSpeed + 10)}
      >
        plus
      </button>
      <button
        className="minus"
        onClick={() => handleRotationSpeed(rotationSpeed - 10)}
      >
        minus
      </button>
      <button className="reset" onClick={() => handleRotationSpeed(0.0)}>
        reset
      </button>
    </scroll>
  );
}

render(<App />);
