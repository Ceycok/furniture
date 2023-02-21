import { useControls } from "leva";

export default function Ambient() {
  const { intensity, color } = useControls("Ambient Light", {
    intensity: { value: 0.5, min: 0, max: 3 },
    color: { value: "white" },
  });
  return <ambientLight intensity={intensity} color={color} />;
}
