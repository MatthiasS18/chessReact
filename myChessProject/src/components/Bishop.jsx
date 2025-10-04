// Bishop.jsx
import { Mesh } from "three";

export default function Bishop({ color, position, onClick }) {
  return (
    <group position={[position[0], position[1] - 0.25, position[2]]} onClick={onClick}>
      
      {/* Base cylindrique */}
      <mesh>
        <cylinderGeometry args={[0.25, 0.35, 0.2, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Corps principal */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0.9, 0]}>
        <coneGeometry args={[0.15, 0.4, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 1.05, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.25, 0.05]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

