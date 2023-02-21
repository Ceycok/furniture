import { useControls } from "leva";

export default function Light1() {
  const { intensity, position } = useControls("Light 1", {
    position: { value: [-2, 1.5, -2] },
    intensity: { value: 0.5, max: 3, min: 0 },
    color: { value: "white" },
  });

  return (
    <spotLight
      position={position}
      intensity={intensity}
      color={"white"}
      castShadow
      shadow-bias={-0.002}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  );
}
