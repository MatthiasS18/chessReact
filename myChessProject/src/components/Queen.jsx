
export default function Queen({ color, position, onClick }) {
  return (
    <group position={[position[0], position[1] - 0.25, position[2]]} onClick={onClick}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.4, 0.2, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Corps principal */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Couronne en haut */}
      <mesh position={[0, 0.95, 0]}>
        <coneGeometry args={[0.2, 0.2, 6]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Petites sphères pour la décoration */}
      <mesh position={[-0.12, 1.05, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="gold" />
      </mesh>
      <mesh position={[0.12, 1.05, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="gold" />
      </mesh>
      <mesh position={[0, 1.05, -0.12]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="gold" />
      </mesh>
      <mesh position={[0, 1.05, 0.12]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </group>
  );
}
