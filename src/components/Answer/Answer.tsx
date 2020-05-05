import * as React from "react";
import { string } from "prop-types";
import "./Answer.scss";

interface AnswerProps {
  answer?: string;
}

const Answer: React.SFC<AnswerProps> = (props) => {
  return (
    <div className="answer">
      <p className="answer__text">
        {props.answer}
      </p>
    </div>
  );
}

Answer.propTypes = {
  answer: string
};

Answer.defaultProps = {
  answer: "no answer yet"
};

export default Answer;