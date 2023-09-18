import { render, useGlobals } from "@reactunity/renderer";
import { Slider } from "@reactunity/material";

const ClearButton = () => {
  const globals = useGlobals();
  const boardInput = globals.Board.GetComponent("BoardInput");

  return (
    <div>
      <button onClick={() => boardInput.FillWhite()}>Clear</button>
    </div>
  );
};

export default ClearButton;
