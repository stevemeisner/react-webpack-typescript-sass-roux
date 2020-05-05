import * as React from "react";
import Question from "./../Question/Question";
import Answer from "./../Answer/Answer";
import "./Set.scss";


const Set: React.SFC = () => {
  return (
    <div className="set">
      <Question />
      <Answer />
    </div>
  );
}

export default Set;