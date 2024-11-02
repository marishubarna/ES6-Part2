import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
// import Seventeen from "./components/Seventeen";
import Eighteen from "./components/Eighteen";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Seventeen /> */}
      <Eighteen />
    </>
  );
}
