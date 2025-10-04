import { useGLTF } from "@react-three/drei";

export default function ChessPiece({ url, position, onClick }) {
  const { scene } = useGLTF(url); // charge le modèle

  return (
    <primitive
      object={scene}      // on rend le modèle
      position={position} // position sur le plateau
      scale={[0.5, 0.5, 0.5]} // ajuster la taille
      onClick={onClick}
    />
  );
}
