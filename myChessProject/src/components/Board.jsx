import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { useState } from "react";
import { BoxGeometry } from "three";

const boardSize = 8;

function Piece({ piece, onClick }) {
  return (
 <div></div>
  );
}



export default function Board() {

  
  const size = 8;
const caseSize = 1;
const squares = [];

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    const isWhite = (row + col) % 2 === 0; // alterne noir/blanc

    squares.push(
      <mesh
        key={`${row}-${col}`}
        position={[col * caseSize, 0, row * caseSize]}
      >
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={isWhite ? "white" : "black"} />
      </mesh>
    );
  }
}


return (
  <Canvas>
  <PerspectiveCamera makeDefault fov={100} position={[5, 5, 5]} />
  <Sky />

  {/* Groupe pour tout le plateau et ses cases */}
  <group position={[0, 0, 0]}>
    <mesh>
     for (let index = 0; index < boardSize.v; index++) {
      const element = array[index];
      
     }
      <boxGeometry args={[8, 0.1, 8]} />

      <meshStandardMaterial />
    </mesh>

    <mesh position={[0, -10, 0]}>
      <boxGeometry args={[50, 0, 50]} />
      <meshStandardMaterial color="red" />
    </mesh>

    <mesh position={[0, -4.9, 0]}>
      <boxGeometry args={[5, 9.8, 5]} />
      <meshStandardMaterial color="black" />
    </mesh>
  </group>

  <OrbitControls />
  <ambientLight intensity={0.5} />
  <directionalLight color="blue" position={[0, 10, 0]} />

</Canvas>
);

}
