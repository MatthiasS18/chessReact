export default function Knight({ color, position, onClick }) {
  return (
    <group position={[position[0], position[1] - 0.25, position[2]]} onClick={onClick}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Corps */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Cou */}
      <mesh position={[0, 0.8, 0.05]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Tête */}
      <mesh position={[0, 1.1, 0.2]}>
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Oreilles (petits triangles stylisés) */}
      <mesh position={[-0.07, 1.25, 0.2]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.07, 1.25, 0.2]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
