import { CameraControls, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Group, MathUtils, PointLightShadow } from "three";
import Chair from "./assets/models/Chair";

export default function Scene() {
  const modelRef = useRef<Group>(null);
  return (
    <group>
      {/* <mesh rotation={[-MathUtils.degToRad(90), 0, 0]} receiveShadow castShadow>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial color={"white"}  />
      </mesh> */}
      <spotLight
        position={[-1, 1.5, -1]}
        intensity={2}
        color={"white"}
        castShadow
        shadow-bias={-0.002}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-1, -1.5, -1]} />
      {/*  <SpotLight
        position={[-1, 1.5, -1]}
        angle={0.5}
        attenuation={2}
        anglePower={5}
        intensity={5}
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      /> */}
      <ambientLight intensity={0.5} />
      <Chair
        ref={modelRef}
        onClick={(event) => {
          console.log(event);
        }}
      />
      <CameraControls />
    </group>
  );
}
