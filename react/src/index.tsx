import { ReactUnity, render, useGlobals } from "@reactunity/renderer";
import "./index.scss";
import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const globals = useGlobals();
  const boardMovement = globals.Board.GetComponent("BoardMovement");

  return (
    <scroll>
      <text>{boardMovement.GetRotationSpeed()}</text>
      <button
        className="plus"
        onClick={() =>
          boardMovement.SetRotationSpeed(boardMovement.GetRotationSpeed() + 10)
        }
      >
        plus
      </button>
      <button
        className="minus"
        onClick={() =>
          boardMovement.SetRotationSpeed(boardMovement.GetRotationSpeed() - 10)
        }
      >
        minus
      </button>
      <button
        className="reset"
        onClick={() => boardMovement.SetRotationSpeed(0)}
      >
        reset
      </button>
    </scroll>
  );
}

render(<App />);
