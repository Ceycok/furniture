import {
  Backdrop,
  CameraControls,
  SoftShadows,
  SpotLight,
  useDepthBuffer,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { DoubleSide, Group, MathUtils, PointLightShadow } from "three";
import Chair from "./assets/models/Chair";
import Ambient from "./Lights/Ambient";
import Light1 from "./Lights/Light1";
import Light2 from "./Lights/Light2";

export default function Scene() {
  const modelRef = useRef<Group>(null);

  const { Soft, frustum, near, samples, size, rings } = useControls("Shadows", {
    Soft: true,
    frustum: {
      value: 6.5,
      max: 9.5,
      min: 3.5,
    },
    size: {
      value: 0.05,
      max: 0.1,
      min: 0.001,
    },
    near: {
      value: 9.5,
      min: 1.5,
      max: 11.5,
    },
    samples: {
      value: 20,
      min: 1,
      max: 20,
      step: 1,
    },
    rings: {
      value: 5,
      min: 1,
      max: 20,
      step: 1,
    },
  });

  return (
    <group>
      {Soft && (
        <SoftShadows
          frustum={frustum}
          size={size}
          near={near}
          samples={samples}
          rings={rings}
        />
      )}
      <mesh rotation={[-MathUtils.degToRad(90), 0, 0]} receiveShadow castShadow>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <Light1 />
      <Light2 />
      <Ambient />
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
