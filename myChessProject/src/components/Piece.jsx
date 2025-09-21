// Piece.jsx
import { useGLTF } from "@react-three/drei";

export default function Piece({ type, position, color }) {
  const { scene } = useGLTF(`/assets/${type}.glb`);
  return (
    <primitive object={scene} position={position} scale={0.5} />
  );
}
