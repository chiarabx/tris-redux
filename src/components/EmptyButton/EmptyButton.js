import React from "react";
import { connect } from "react-redux";
import { updateCells, updateScore } from "../Cell/redux/Cell.action";

class EmptyButtonComponent extends React.Component {
  empty() {
    this.props.updateCells(["", "", "", "", "", "", "", "", ""]);
    this.props.updateScore(null);
  }
  render() {
    return this.props.score === null ? (
      <button onClick={() => this.empty()}>Reset Game</button>
    ) : (
      <button onClick={() => this.empty()}>Play Again!</button>
    );
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  score: state.score
});

const mapDispatchToProps = dispatch => ({
  updateCells: (x, y, z) => dispatch(updateCells(x, y, z)),
  updateScore: score => dispatch(updateScore(score))
});

export const EmptyButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmptyButtonComponent);
