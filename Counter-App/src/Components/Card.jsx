import React, { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  function increaseHandler() {
    setCount(count + 1);
    console.log(count);
  }
  function decreaseHandler() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="outerCont">
        <div className="innerCont">
          <div className="disp">{count}</div>
          <div className="btnCont">
            <button className="btn" onClick={increaseHandler}>
              Increment
            </button>
            <button className="btn" onClick={decreaseHandler}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
