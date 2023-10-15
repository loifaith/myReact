export default function board() {
  return (
    <>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </>
  )

}



function Square() {
  return <button className="square"></button>;
}
