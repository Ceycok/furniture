import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import Scene from "./Scene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="canvas-container">
      <Canvas className="canvas" shadows="soft">
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
