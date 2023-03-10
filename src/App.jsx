import { useState } from "react";
import "./App.css";
import logo from "./assets/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [click, setClick] = useState(0);

  const controlClick = () => {
    console.log("Diste click");
    setClick(click + 1);
  };

  const resetCounter = () => {
    console.log("Reset");
    setClick(0);
  };

  return (
    <div className="App flex  flex-wrap items-center justify-center pt-4">
      <div className="m-5 flex w-full items-center justify-center">
        <img className="h-12" src={logo} />
      </div>
      <div className="flex h-[550px] flex-col flex-wrap items-center justify-center">
        <Counter click={click} />

        <Button
          text="Increase click"
          isClickButton={true}
          controlClick={controlClick}
        />
        <Button
          text="Reset"
          isClickButton={false}
          controlClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
