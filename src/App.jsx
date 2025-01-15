import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <QRCodeGenerator />
      </div>
    </>
  );
}

export default App;
