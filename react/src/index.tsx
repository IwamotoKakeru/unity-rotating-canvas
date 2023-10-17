import { useState } from "react";
import { render, useGlobals } from "@reactunity/renderer";
import { Slider } from "@reactunity/material";
import ClearButton from "./ClearButton";
import "./index.css";

function App() {
  // useGlobalの設定
  const globals = useGlobals();
  const boardMovement = globals.Board.GetComponent("BoardMovement");

  // UI用定数の宣言
  const INCREMENT_NUM: number = 1;
  const MAX_ROTATION_SPEED: number = 512;
  const MIN_ROTATION_SPEED: number = 0;

  // 回転速度用stateの宣言
  const [rotationSpeed, SetRotationSpeed] = useState(
    boardMovement.RotationSpeed
  );

  // UIでの変更を反映させる関数
  const handleRotationSpeed = (speedValue) => {
    if (speedValue < MIN_ROTATION_SPEED) {
      speedValue = MIN_ROTATION_SPEED;
    } else if (MAX_ROTATION_SPEED < speedValue) {
      speedValue = MAX_ROTATION_SPEED;
    } else {
      // 何もしない
    }

    // Stateへ反映
    SetRotationSpeed(speedValue);
    // C#側に反映
    boardMovement.RotationSpeed = speedValue;
  };

  return (
    <div className="all-contents">
      <text className="text">{rotationSpeed.toString()}</text>
      <div className="increment-buttons">
        <button onClick={() => handleRotationSpeed(0.0)}>0</button>
        <button
          onClick={() => handleRotationSpeed(rotationSpeed + INCREMENT_NUM)}
        >
          +
        </button>
      </div>
      <Slider
        step={INCREMENT_NUM}
        min={MIN_ROTATION_SPEED}
        max={MAX_ROTATION_SPEED}
        value={rotationSpeed}
        onChange={handleRotationSpeed}
      />
      <ClearButton />
    </div>
  );
}

render(<App />);
