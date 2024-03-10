import Square from "./Square.jsx";

function SquareContainer({ squaresArray }) {
  return (
    <div className="squareContainer">
      {squaresArray.map((square, index) => (
        <Square key={index} color={square.color} />
      ))}
    </div>
  );
}

export default SquareContainer;
