
export default function Bishop({WhiteCamp, piece, onClick}) {

  return (
    <mesh
      position={piece.position}
      onClick={(e) => {
        e.stopPropagation(); 
        onClick(piece);
      }}
    >
      <boxGeometry args={[0.9, 0.5, 0.9]} />
      <meshStandardMaterial color={piece.color} />
    </mesh>
  );
  }
  
  
  