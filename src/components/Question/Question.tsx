import * as React from "react";
import { string } from "prop-types";
import "./Question.scss";

interface QuestionProps {
  text?: string;
}

const Question: React.SFC<QuestionProps> = (props) => {
  return (
    <div className="question">
      <p className="question__text">
        Question: {props.text}
      </p>
    </div>
  );
}

Question.propTypes = {
  text: string
};

Question.defaultProps = {
  text: "Default Question Text?"
};

export default Question;