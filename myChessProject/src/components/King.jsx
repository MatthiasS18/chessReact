export default function King({ color, position, onClick }) {
  return (
    <group position={[position[0], position[1] - 0.3, position[2]]} onClick={onClick}>

      {/* Base du roi */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Corps */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Tête */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Croix du roi */}
      {/* Partie verticale */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      {/* Partie horizontale */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.25, 0.05, 0.05]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </group>
  );
}
