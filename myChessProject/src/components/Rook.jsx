export default function Rook({ color, position, onClick }) {
  return (
    <group position={[position[0], position[1] - 0.25, position[2]]} onClick={onClick}>
      {/* Base large */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.4, 0.2, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Corps principal */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Crénelures en haut */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-0.1, 0.9, -0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.1, 0.9, -0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.1, 0.9, 0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.1, 0.9, 0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
