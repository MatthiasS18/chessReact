import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { useState } from "react";
import { BoxGeometry, Mesh } from "three";
import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Rook from "./Rook";
import Queen from "./Queen";
import ChessPiece from "./ChessPiece";





function Piece({ piece, onClick }) {
  return (
 <div></div>
  );
}

export default function Board() {


  const getUrl = (type) => {
    switch(type) {
      case "Bishop": return "/models/bishop.glb";
      case "Knight": return "/models/knight.glb";
      case "Rook": return "/models/rook.glb";
      case "Queen": return "/models/queen.glb";
      case "King": return "/models/king.glb";
      default: return "/models/pawn.glb";
    }
  };
  


  const handleSelectCell = (row, col) => {
    if (selectedPawn !== null) {
      const pawn = pawns.find(p => p.id === selectedPawn);
      if (!pawn) return;
  
      // Vérifier si la case est occupée
      if (pawns.some(p => p.row === row && p.col === col)) {
        alert("This place is occupied");
        setSelectedPawn(null);
        return;
      }
  
      // Vérifier les règles de mouvement pour le Bishop
      if (pawn.type === "Bishop") {
        const rowDiff = Math.abs(row - pawn.row);
        const colDiff = Math.abs(col - pawn.col);
        if (rowDiff !== colDiff) {
          alert("Bishop can only move diagonally!");
          setSelectedPawn(null);
          return;
        }
      }

      if (pawn.type === "King") {
        const rowDiff = Math.abs(row - pawn.row);
        const colDiff = Math.abs(col - pawn.col);
        if (rowDiff > 1 || colDiff > 1) {
          alert("King can move only one step in any direction!");
          setSelectedPawn(null);
          return;
        }
      }

      if (pawn.type === "Knight") {
        const rowDiff = Math.abs(row - pawn.row);
        const colDiff = Math.abs(col - pawn.col);
      
        // Le cavalier doit faire un déplacement en L : 2 et 1 dans n'importe quel ordre
        const isLShape =
          (rowDiff === 2 && colDiff === 1) ||
          (rowDiff === 1 && colDiff === 2);
      
        if (!isLShape) {
          alert("Knight must move in an L shape!");
          setSelectedPawn(null);
          return;
        }
      }


      if (pawn.type === "Rook") {
        const rowDiff = row - pawn.row;
        const colDiff = col - pawn.col;
      
        // Vérifier que le mouvement est en ligne ou en colonne
        if (rowDiff !== 0 && colDiff !== 0) {
          alert("Rook can only move in straight lines!");
          setSelectedPawn(null);
          return;
        }
      
        // Vérifier s'il y a des pions sur le chemin
        const stepRow = rowDiff === 0 ? 0 : rowDiff / Math.abs(rowDiff); // 1, -1 ou 0
        const stepCol = colDiff === 0 ? 0 : colDiff / Math.abs(colDiff); // 1, -1 ou 0
      
        let r = pawn.row + stepRow;
        let c = pawn.col + stepCol;
      
        while (r !== row || c !== col) {
          if (pawns.some(p => p.row === r && p.col === c)) {
            alert("Rook cannot jump over pieces!");
            setSelectedPawn(null);
            return;
          }
          r += stepRow;
          c += stepCol;
        }
      }
      

      if (pawn.type === "Queen") {
        const rowDiff = row - pawn.row;
        const colDiff = col - pawn.col;
      
        // Vérifier si le mouvement est valide : ligne, colonne ou diagonale
        const isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);
        const isStraight = rowDiff === 0 || colDiff === 0;
      
        if (!isDiagonal && !isStraight) {
          alert("Queen can move only in straight lines or diagonally!");
          setSelectedPawn(null);
          return;
        }
      
        // Calculer le pas pour parcourir le chemin
        const stepRow = rowDiff === 0 ? 0 : rowDiff / Math.abs(rowDiff);
        const stepCol = colDiff === 0 ? 0 : colDiff / Math.abs(colDiff);
      
        // Vérifier si le chemin est libre (pas de pion sur le chemin)
        let r = pawn.row + stepRow;
        let c = pawn.col + stepCol;
      
        while (r !== row || c !== col) {
          if (pawns.some(p => p.row === r && p.col === c)) {
            alert("Queen cannot jump over pieces!");
            setSelectedPawn(null);
            return;
          }
          r += stepRow;
          c += stepCol;
        }
      }
      

   
  
      // Déplacer le pion
      setPawns(prevPawns =>
        prevPawns.map(p =>
          p.id === selectedPawn ? { ...p, row, col } : p
        )
      );
  
      setSelectedPawn(null);
    }
  };
  
  



/*********
 * STATE *
 *********/
  const size = 8;      // nombre de cases par côté
  const caseSize = 1;  // taille d’une case

  const [pawns, setPawns] = useState(() => {
    const initialPawns = [];
    let index = 0;
    for (let col = 0; col < size; col++) {
      // initialPawns.push({ id: index++, row: 1, col: col, color: "blue" });   // rangée 2
      // initialPawns.push({ id: index++, row: 6, col: col, color: "yellow" }); // rangée 7
    }
    initialPawns.push({ id: index++, row: 0, col: 2, color: "blue", type: "Bishop" });
    initialPawns.push({ id: index++, row: 7, col: 5, color: "yellow", type: "Bishop" });

    initialPawns.push({ id: index++, row: 0, col: 5, color: "blue", type: "Bishop" });
    initialPawns.push({ id: index++, row: 7, col: 2, color: "yellow", type: "Bishop" });

    initialPawns.push({ id: index++, row: 0, col: 4, color: "blue", type: "King" });
    initialPawns.push({ id: index++, row: 7, col: 4, color: "yellow", type: "King" });

    initialPawns.push({ id: index++, row: 0, col: 6, color: "blue", type: "Knight" });
    initialPawns.push({ id: index++, row: 0, col: 1, color: "blue", type: "Knight" });

    initialPawns.push({ id: index++, row: 7, col: 6, color: "yellow", type: "Knight" });
    initialPawns.push({ id: index++, row: 7, col: 1, color: "yellow", type: "Knight" });

    initialPawns.push({ id: index++, row: 7, col: 7, color: "yellow", type: "Rook" });
    initialPawns.push({ id: index++, row: 7, col: 0, color: "yellow", type: "Rook" });

    initialPawns.push({ id: index++, row: 0, col: 7, color: "blue", type: "Rook" });
    initialPawns.push({ id: index++, row: 0, col: 0, color: "blue", type: "Rook" });


    initialPawns.push({ id: index++, row: 0, col: 3, color: "blue", type: "Queen" });
    initialPawns.push({ id: index++, row: 7, col: 3, color: "yellow", type: "Queen" });

    return initialPawns;
  });
  
  
  
  // for creating the cases on the board
  const squares = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const isWhite = (row + col) % 2 === 0;

      squares.push(
        <mesh
          key={`${row}-${col}`}
          position={[col * caseSize, 0, row * caseSize]}
          onClick={()=>{handleSelectCell(row, col)}}
        >
          <boxGeometry args={[caseSize, 0.1, caseSize]} />
          <meshStandardMaterial color={isWhite ? "white" : "black"} />
        </mesh>
      );
    }
  }




const [selectedPawn, setSelectedPawn] = useState(null);

/****************
 * COMPORTEMENT *
 ****************/






  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={75} position={[5, 8, 10]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Sky/>

      <group position={[-size / 2 + 0.5, 0, -size / 2 + 0.5]}>
  {squares}
</group>




      <mesh position={[0, -10, 0]}>
      <boxGeometry args={[50, 0, 50]} />
      <meshStandardMaterial color="red" />
    </mesh>



    <mesh position={[-0.5, -4.9, -0.5]}>
      <boxGeometry args={[5, 9.8, 5]} />
      <meshStandardMaterial color="grey" />
    </mesh>


    {pawns.map((pawn) => {
  const position = [
    pawn.col * caseSize - size / 2 + 0.5,
    0.5,
    pawn.row * caseSize - size / 2 + 0.5
  ];

  const onClick = () => setSelectedPawn(pawn.id);

  switch (pawn.type) {
    case "Bishop":
      return <Bishop key={pawn.id} color={pawn.color} position={position} onClick={onClick} />;
    case "King":
      return <King key={pawn.id} color={pawn.color} position={position} onClick={onClick} />;
    case "Knight":
      return <Knight key={pawn.id} color={pawn.color} position={position} onClick={onClick} />;
    case "Rook":
      return <Rook key={pawn.id} color={pawn.color} position={position} onClick={onClick} />;
    case "Queen":
        return <Queen key={pawn.id} color={pawn.color} position={position} onClick={onClick} />;
    case "Pawn":
    default:
      return (
        <mesh key={pawn.id} position={position} onClick={onClick}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color={pawn.color} />
        </mesh>
      );
  }
})}




      <OrbitControls />
    </Canvas>
  );
}
