import { useControls } from "leva";

export default function Light1() {
  const { intensity, position, angle, color } = useControls("Light 1", {
    position: { value: [-2, 1.5, -2] },
    intensity: { value: 0.5, max: 3, min: 0 },
    color: { value: "white" },
    angle: { value: 1, min: 0, max: Math.PI },
  });

  return (
    <spotLight
      angle={angle}
      position={position}
      intensity={intensity}
      color={color}
      castShadow
      shadow-bias={-0.002}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  );
}
