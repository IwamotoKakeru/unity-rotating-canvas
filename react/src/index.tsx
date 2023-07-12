import { render } from "@reactunity/renderer";
import "./index.scss";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const rotationSpeed:number = new Interop.UnityEngine.
  return (
    <scroll>
      <text>{count.toString()}</text>
      <button className="plus" onClick={() => setCount(count + 1)}>
        plus
      </button>
      <button className="minus" onClick={() => setCount(count - 1)}>
        minus
      </button>
      <button className="reset" onClick={() => setCount(0)}>
        reset
      </button>
    </scroll>
  );
}

render(<App />);
