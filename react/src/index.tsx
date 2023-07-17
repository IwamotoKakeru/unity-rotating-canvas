import { useState } from "react";
import { render, useGlobals } from "@reactunity/renderer";

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
        onClick={() => handleRotationSpeed(rotationSpeed + 10)}
      >
        plus
      </button>
      <button
        onClick={() => handleRotationSpeed(rotationSpeed - 10)}
      >
        minus
      </button>
      <button onClick={() => handleRotationSpeed(0.0)}>
        reset
      </button>
    </scroll>
  );
}

render(<App />);
