import { useState } from "react";


export default function board() {
  const value = useState([Array(9).full(null)])

  return (
    <>
      <div className="board-row">
        <Square value={value[0]}></Square>
        <Square value={value[1]}></Square>
        <Square value={value[2]}></Square>
      </div>
      <div className="board-row">
        <Square value={value[3]}></Square>
        <Square value={value[4]}></Square>
        <Square value={value[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={value[6]}></Square>
        <Square value={value[7]}></Square>
        <Square value={value[8]}></Square>
      </div>
    </>
  )

}



function Square({value}) {
  function onClickSqure() {
    alert("Square Clicked!!!")
  }

  return <button className="square" onClick={onClickSqure()}>{value}</button>;
}
