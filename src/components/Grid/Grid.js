import React from "react";

import { MatchOutcome } from "../MatchOutcome/MatchOutcome";
import { connect } from "react-redux";
import { updateCells, updateScore } from "../Cell/redux/Cell.action";
import { changeTurn } from "../Cell/redux/Cell.action";

class GridComponent extends React.Component {
  checkWinner(array, el) {
    if (array.indexOf("") === -1) this.props.updateScore("tie");
    if (el[0] === "⭕️" && el[0] === el[1] && el[0] === el[2])
      this.props.updateScore("⭕️CIRCLE⭕️");
    if (el[0] === "❌" && el[0] === el[1] && el[0] === el[2])
      this.props.updateScore("❌CROSS❌");
  }
  play(arr, idx, turn) {
    if (arr[idx] !== "")
      alert("This cell is already occupied! Please choose another cell.");
    else {
      this.props.updateCells(arr, idx, turn);
      this.props.updateTurn(turn);
      let combos = [
        [arr[0], arr[1], arr[2]],
        [arr[3], arr[4], arr[5]],
        [arr[6], arr[7], arr[8]],
        [arr[0], arr[3], arr[6]],
        [arr[1], arr[4], arr[7]],
        [arr[2], arr[5], arr[8]],
        [arr[0], arr[4], arr[8]],
        [arr[6], arr[4], arr[2]]
      ];
      combos.forEach(element => {
        return this.checkWinner(arr, element);
      });
    }
  }

  render() {
    return (
      <div className="trisContainer">
        {this.props.score === null ? (
          this.props.cells.map((cell, index) => (
            <div
              className="trisCell"
              key={index}
              onClick={() =>
                this.play(this.props.cells, index, this.props.turn)
              }
            >
              {cell}
            </div>
          ))
        ) : (
          <MatchOutcome />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  turn: state.turn,
  score: state.score
});

const mapDispatchToProps = dispatch => ({
  updateCells: (x, y, z) => dispatch(updateCells(x, y, z)),
  updateTurn: turn => dispatch(changeTurn(turn)),
  updateScore: score => dispatch(updateScore(score))
});

export const Grid = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridComponent);
