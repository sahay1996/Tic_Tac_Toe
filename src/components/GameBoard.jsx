import { useState } from "react";
const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare,activePlayer}){
    const[gameBoard,setGameBoard]=useState(initialBoard);
    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedGameBoard[rowIndex][colIndex]=activePlayer;
            return updatedGameBoard;
        });
        onSelectSquare(rowIndex,colIndex);
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li> )}
                </ol>
            </li>)}
        </ol>
    )
}