import { useState } from "react";
import "./index.scss";
import { render, useGlobals } from "@reactunity/renderer";
import { Slider } from "@reactunity/material";

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

  // UI用定数の宣言
  const INCREMENT_NUM: number = 10;
  const MAX_ROTATION_SPEED: number = 256;
  const MIN_ROTATION_SPEED: number = -256;

  return (
    <scroll>
      <text>{rotationSpeed}</text>
      <button
        className="plus"
        onClick={() => handleRotationSpeed(rotationSpeed + INCREMENT_NUM)}
      >
        plus
      </button>
      <button
        className="minus"
        onClick={() => handleRotationSpeed(rotationSpeed - INCREMENT_NUM)}
      >
        minus
      </button>
      <button className="reset" onClick={() => handleRotationSpeed(0.0)}>
        reset
      </button>
      <Slider
        direction="vertical"
        min={MIN_ROTATION_SPEED}
        max={MAX_ROTATION_SPEED}
        value={rotationSpeed}
        onChange={handleRotationSpeed}
      />
    </scroll>
  );
}

render(<App />);
