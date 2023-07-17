import { useState } from "react";
import { render, useGlobals } from "@reactunity/renderer";

function App() {
  // useGlobalの設定
  const globals = useGlobals();
  const boardMovement = globals.Board.GetComponent("BoardMovement");

  // 回転速度用stateの宣言
  const [rotationSpeed, SetRotationSpeed] = useState(
    boardMovement.RotationSpeed
  );

  // UIでの変更を反映させる関数
  const handleRotationSpeed = (speedValue) => {
    // Stateへ反映
    SetRotationSpeed(speedValue);

    // C#側に反映
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
