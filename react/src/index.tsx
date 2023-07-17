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

  const changeSlider = () => {};

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
      <Slider
        direction="vertical"
        min={-999}
        max={999}
        value={rotationSpeed}
        onChange={handleRotationSpeed}
      />
    </scroll>
  );
}

render(<App />);
