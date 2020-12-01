import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextStepFetch } from "../reducers/reusable";
import { game } from "../reducers/game";

export const Board = () => {
  const dispatch = useDispatch();
  const stateUsername = useSelector((state) => state.game.username);
  const currentStep = useSelector((state) => state.game.currentStep);

  const onNextStep = (direction) => {
    dispatch(nextStepFetch(stateUsername, "move", direction));
  };

  return (
    <div>
      {currentStep.coordinates && (
        <>
          <p>Coordinates: {currentStep.coordinates}</p>
          <p>Description: {currentStep.description}</p>
          {currentStep.actions.map((action) => {
            return (
              <div>
                <button
                  value={action.direction}
                  onClick={(event) => onNextStep(event.target.value)}
                >
                  {action.direction}
                </button>
                <p>{action.description}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
