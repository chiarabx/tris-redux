import React from "react";
import { connect } from "react-redux";

const MatchOutcomeComponent = props => {
  if (props.score === "tie")
    return <div className="victory-announcement">It's a tie!</div>;
  if (props.score != null)
    return (
      <div className="victory-announcement">
        🎉🎉🎉
        <br />
        <br />
        Congrats
        <br />
        {props.score}
        <br />
        You Win!
        <br />
        <br />
        🎉🎉🎉
      </div>
    );
  return null;
};

const mapStateToProps = state => ({
  score: state.score
});

export const MatchOutcome = connect(
  mapStateToProps,
  undefined
)(MatchOutcomeComponent);
