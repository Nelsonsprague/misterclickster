import React from "react";
import "./Counter.css"

function Counter(props){
        return(
            <>
        <table className="table tableHover">
          <tbody>
              <th scope="row">Clicky Game!</th>
              <td>Click on an image to get started!</td>
                <td className="score-text">Score: {props.score} ||   High Score: {props.highScore}</td>
          </tbody>
        </table>
           </>
        )
}

export default Counter